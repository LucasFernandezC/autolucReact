import React from "react";
import { useState } from "react";

const ItemCounts = (props) => {
  const [contador, setearContador] = useState(parseInt(props.inicial));
  
  const sumarItem = () => {
    if (contador < props.stock) {
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
  };

  return (
    <>
    <div className="contadorStock">
      <button onClick={restarItem}>-</button>
      <h3>{contador}</h3>
      <button onClick={sumarItem}>+</button>
      </div>
    <button onClick={onAdd}> Agregar! </button>
    </>
  );
};

export default ItemCounts;
