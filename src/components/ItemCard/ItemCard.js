import React from "react";
import './ItemCard.css'
import ItemCounts from "../ItemCounts/ItemCounts";



const ItemCard = ({props}) => {

const onAdd = () =>{console.log("hice click")}  
//console.log("prueba: " + props.titulo)

  return (
    <div>
      <article className="card busquedaresults__card">
        <img
          src={props.imagen}
          className="card-img-top"
          alt="Auto en venta"
        ></img>
        <div className="card-body text-center">
          <h5 className="card-title titulotarjeta">{props.titulo}</h5>
          <p className="card-text">
            {props.texto} Stock: {props.stock}
          </p>
          <ItemCounts inicial = "1" stock={props.stock} onAdd={onAdd}/>
          <a className="btn btn-primary start" id="agregar1">
            Me gusta
          </a>
          <a className="btn btn-success  end" id="reservar1">
            Reservar
          </a>
        </div>
      </article>
    </div>
  );
}

export default ItemCard;
