import React from "react";
import ItemList from "../ItemList/ItemList";
//import products from "../../utils/product";
import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore/lite";
import db from "../../utils/firebaseConfig";

const ItemDetailContainer = () => {

    //const [listProducts, setListProducts] = useState([]);
    const [detailProduct, setDetailProduct] = useState({});
    const { id } = useParams()


      const getProduct = async () => {
          const docRef = doc(db, 'products', id)
          const docSnapshot = await getDoc(docRef)
          let docRes = docSnapshot.data()
          docRes.id = id
          return docRes
      }
  //Version Vieja con el MOCK    
  //  const getProducts = new Promise((resolve,reject) =>{
  //      
  //      setTimeout(()=>{
  //          resolve(products);
  //      },2000);
  //})
    
      useEffect(()=>{
          getProduct().then((data)=>{
                                 setDetailProduct(data)
                              })
          })
      

  //Version Vieja con el MOCK   
  //  useEffect(()=>{
  //      getProducts.then((data)=>{
  //         
  //          setListProducts(data);
  //          data.some((data) => {
  //              if(parseInt(data.id) == parseInt(id)){
  //                  setDetailProduct(data)
  //              }
  //      })
  //      })
  //  },[]);


   


  return (
    <article id="results">
        <ItemDetail props={detailProduct}/>
    </article>
  );
};
//<ItemDetail dataProducts ={Product}></ItemDetail>
export default ItemDetailContainer;
