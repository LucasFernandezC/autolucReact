import React from "react";
import { useState, useContext } from "react";
import { cartContext } from "../../context/CartContext";
import "./ItemCounts.css"

const ItemCounts = (props) => {
  const [contador, setearContador] = useState(parseInt(props.inicial));
  const {cartProducts, addProduct} = useContext(cartContext)
  
  const sumarItem = () => {
    
    if (contador < props.props.stock) {
      setearContador(contador + 1);
      
    }
  };
  const restarItem = () => {
    if (contador > 1) {
      setearContador(contador - 1);
    }
  };

  const onAdd = () => {
    props.setQuantity(contador)
    const productoAgregar = {...props.props, cantidad:contador}
    addProduct(productoAgregar)
  };

  return (
    <>
    <div className="contadorStock">
      <button onClick={restarItem}>-</button>
      <h3>{contador}</h3>
      <button onClick={sumarItem}>+</button>
      </div>
    <button className="btn btn-primary" onClick={onAdd}> Agregar! </button>
    </>
  );
};

export default ItemCounts;
