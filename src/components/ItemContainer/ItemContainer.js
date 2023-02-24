import React from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemContainer.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore/lite";
import db from "../..//utils/firebaseConfig";

const ItemContainer = ({ section }) => {
  const [listProducts, setListProducts] = useState([]);
  const { category } = useParams();

  const getProducts = async () => {
    const productCollection = collection(db, "products");
    if (category != undefined) {
      const q1 = query(productCollection, where("categoria", "==", category));
      let productSnapshoot = await getDocs(q1);
      const productList = productSnapshoot.docs.map((doc) => {
        let fullproduct = doc.data();
        fullproduct.id = doc.id;
        return fullproduct;
      });
      return productList;
    } else {
      const productSnapshoot = await getDocs(productCollection);
      const productList = productSnapshoot.docs.map((doc) => {
        let fullproduct = doc.data();
        fullproduct.id = doc.id;
        return fullproduct;
      });
      return productList;
    }
  };


  useEffect(() => {
    getProducts().then((res) => {
      //filtrado previo a la implementacion de where
      //if (category != undefined) {
      //  res.filter(() => {
      //    res = res.filter((el) => el.categoria == category);
      //  });
      //}
      setListProducts(res);
    });
  }, [category]);

  return (
    <article id="results" className="col-md-12">
      <h2 className="busquedaresults__Seccion">{section}</h2>
      <div id="resultadosBusqueda" className="busquedaresults col-lg-12 align-items-stretch">
        <ItemList dataProducts={listProducts}></ItemList>
      </div>
    </article>
  );
};

export default ItemContainer;
