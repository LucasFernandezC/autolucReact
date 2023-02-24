import React from "react";
import { createContext, useState } from "react";

const cartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [cartCantidad, setCartCantidad] = useState(0);


  const addProduct = (producto) => {

    if (cartProducts.length > 0) {
      const posicion = cartProducts.findIndex(
        (element) => element.id == producto.id
      )
      
      if (posicion != -1) {
        if((cartProducts[posicion].cantidad+producto.cantidad)>producto.stock){
            let cantidadOriginal = cartProducts[posicion].cantidad
            cartProducts[posicion].cantidad = producto.stock
            setCartCantidad((cartCantidad - cantidadOriginal) + producto.stock)
            
        }
        else{
            
            cartProducts[posicion].cantidad = cartProducts[posicion].cantidad + producto.cantidad
            setCartCantidad(cartCantidad + producto.cantidad)
        } 
      }
      else{
          
        setCartProducts([...cartProducts,producto])
        setCartCantidad(cartCantidad + producto.cantidad)
      }
    }
    else{
        
        setCartProducts([producto])
        setCartCantidad(cartCantidad + producto.cantidad)
    }
    
  };

  const deleteProduct = (product) => {
    
    setCartCantidad(cartCantidad - product.cantidad)
    setCartProducts(cartProducts.filter( (cartProduct) => cartProduct.id !== product.id) )
}

const clear = () => {
    setCartProducts([])
    setCartCantidad(0)
}


  const data = {
    cartProducts,
    addProduct,
    deleteProduct,
    clear,
    cartCantidad
  };

  return <cartContext.Provider value={data}>{children}</cartContext.Provider>;
};

export default CartProvider;

export { cartContext };
