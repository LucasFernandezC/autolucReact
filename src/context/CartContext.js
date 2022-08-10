import React from "react";
import { createContext, useState } from "react";

const cartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
    


  const addProduct = (producto) => {

    if (cartProducts.length > 0) {
      const posicion = cartProducts.findIndex(
        (element) => element.id == producto.id
      )
      
      if (posicion != -1) {
        if((cartProducts[posicion].cantidad+producto.cantidad)>producto.stock){
            cartProducts[posicion].cantidad = producto.stock
            
        }
        else{
            
            cartProducts[posicion].cantidad = cartProducts[posicion].cantidad + producto.cantidad
        } 
      }
      else{
          
        setCartProducts([...cartProducts,producto])
      }
    }
    else{
        
        setCartProducts([producto])
    }
    
  };

  const deleteProduct = (product) => {
    console.log("Producto a eliminar:", product)
    setCartProducts(cartProducts.filter( (cartProduct) => cartProduct.id !== product.id) )
}

const clear = () => {
    setCartProducts([])
}


  const data = {
    cartProducts,
    addProduct,
    deleteProduct,
    clear
  };

  return <cartContext.Provider value={data}>{children}</cartContext.Provider>;
};

export default CartProvider;

export { cartContext };
