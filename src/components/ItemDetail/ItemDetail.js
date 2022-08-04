import React from "react";
import "./ItemDetail.css";
import ItemCounts from "../ItemCounts/ItemCounts";

const ItemDetail = ({ props }) => {
  
  const onAdd = () => {
    console.log("hice click");
  };
  console.log(props);
  return (
    <div>
      <h5 className="titulo__detalle">DETALLE DE PRODUCTO</h5>
      <div className="detalle">
        <article className="col-md-7">
          <img
            src={`../${props.imagen}`}
            className="card-img-top"
            alt="Auto en venta"
          ></img>
        </article>
        <article className="col-md-5">
          <div className="text-center">
            <h2 className="">{props.titulo} </h2>
            <p>Descripcion del producto: {props.texto}</p>
            <p>Categoria: {props.categoria}</p>
            <p>Stock: {props.stock}</p>
            <p>Precio: {props.precio}</p>
            <ItemCounts inicial="1" stock={props.stock} onAdd={onAdd} />
            <button>Comprar!</button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ItemDetail;
