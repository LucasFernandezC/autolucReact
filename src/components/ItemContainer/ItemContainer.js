import React from "react";
import ItemList from "../ItemList/ItemList";
import products from "../../utils/product";
import "./ItemContainer.css";
import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";

const ItemContainer = ({ section }) => {
  const [listProducts, setListProducts] = useState([]);
  const { category } = useParams();

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });

  useEffect(() => {
    getProducts.then((data) => {
      
      console.log(category)
      if(category != undefined){
        console.log("entre a filtrar el array")
        data.filter( () => {
          data = data.filter((el) => el.categoria == category);
        })
      }
      setListProducts(data);
      
    });
  }, [category]);

  return (
    <article id="results" className="col-md-12">
      <h2>{section}</h2>
      <div id="resultadosBusqueda" className="busquedaresults col-md-12">
        <ItemList dataProducts={listProducts}></ItemList>
      </div>
    </article>
  );
};

export default ItemContainer;
