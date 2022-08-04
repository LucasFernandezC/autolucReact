import React from "react";
import ItemList from "../ItemList/ItemList";
import products from "../../utils/product";
import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {

    const [listProducts, setListProducts] = useState([]);
    const [detailProduct, setDetailProduct] = useState({});
    const { id } = useParams()
    const getProducts = new Promise((resolve,reject) =>{
        
        setTimeout(()=>{
            resolve(products);
        },2000);

        
    })
    console.log(useParams())
    useEffect(()=>{
        getProducts.then((data)=>{
            
            setListProducts(data);
            
            data.some((data) => {
                
                if(parseInt(data.id) == parseInt(id)){
                    setDetailProduct(data)
                    
                }
        })
        })
    },[]);


   


  return (
    <article id="results">
        <ItemDetail props={detailProduct}/>
    </article>
  );
};
//<ItemDetail dataProducts ={Product}></ItemDetail>
export default ItemDetailContainer;
