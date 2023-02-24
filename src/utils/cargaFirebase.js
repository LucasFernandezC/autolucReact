import React from "react";
import { useState,useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import products from "../utils/product";

//solo para update de productos
//import { arrayProducts } from '../utils/product';

import { uploadCollectionItems } from "../utils/helper";


let arrayProducts = []
let category=undefined

const getProducts = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(products);
  }, 2000);
});


  getProducts.then((data) => {
    
    console.log(category)
    if(category != undefined){
      console.log("entre a filtrar el array")
      data.filter( () => {
        data = data.filter((el) => el.categoria == category);
      })
    }
    arrayProducts = data
    
  });


const firebaseConfig = {
apiKey: "AIzaSyAZYqYCG4EnxhutT_fd_a2SXq8UR57DzYg",
authDomain: "autoluc-react.firebaseapp.com",
projectId: "autoluc-react",
storageBucket: "autoluc-react.appspot.com",
messagingSenderId: "712478287789",
appId: "1:712478287789:web:83846ee42f609aa15aa324"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;


//Correr por única vez cuando aún no he subido los productos a mi colección.
if(false){
  setTimeout(() =>{
    uploadCollectionItems(arrayProducts, 'products');
  },4000)
}