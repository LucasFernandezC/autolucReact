import React from "react";
import "./ItemCard.css";
import {Link} from "react-router-dom";

const ItemCard = ({ props }) => {
  const onAdd = () => {
    console.log("hice click");
  };
  //console.log("prueba: " + props.titulo)

  return (
    <div>
      <article className="card busquedaresults__card">
        <img
          src={props.imagen}
          className="card-img-top"
          alt="Repuesto en venta"
        ></img>
        <div className="card-body text-center">
          <h5 className="card-title titulotarjeta">{props.titulo}</h5>
          <p className="card-text">
            {props.texto} 
          </p>
          <p><strong>Stock: </strong>{props.stock}</p>
          <p><strong>Precio: $ </strong>{props.precio}</p>
          
          <Link to={`/producto/${props.id}`} className="btn btn-primary start" id="agregar1">
            Agregar
          </Link>
        </div>
      </article>
    </div>
  );
};
//<ItemCounts inicial="1" stock={props.stock} onAdd={onAdd} />
export default ItemCard;
