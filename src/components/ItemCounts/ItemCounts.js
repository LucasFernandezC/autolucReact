import React from "react";
import { useState } from "react";

const ItemCounts = (props) => {

    const [contador, setearContador] = useState(parseInt(props.inicial));
    const sumarItem = () => {
      if (contador< props.stock){
        setearContador (contador + 1)
      }
    }
    const restarItem = () => {
      if (contador>1){
        setearContador(contador-1)
      }
  
    }

    return(

        <div className="contadorStock">
            <button onClick={restarItem}>-</button>
            <h3>{contador}</h3>
            <button onClick={sumarItem}>+</button>
          </div>
    )



}

export default ItemCounts