import React from "react";
import "./ItemDetail.css";
import ItemCounts from "../ItemCounts/ItemCounts";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ props }) => {
  const [Quantity,setearCantidad] = useState(0)
  console.log("seteo cantidad " ,Quantity)
  
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
            { Quantity == 0 ? <ItemCounts inicial="1" props={props} setQuantity={setearCantidad} /> : <Link to={"/cart"}> <button className="btn btn-success"> Terminar Compra</button></Link>
            }         
          </div>
        </article>
      </div>
    </div>
  );
};

export default ItemDetail;
