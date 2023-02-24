import React from "react";
import "./ItemDetail.css";
import ItemCounts from "../ItemCounts/ItemCounts";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ props }) => {
  const [Quantity,setearCantidad] = useState(0)
  
  
  return (
    <div>
      <h2 className="titulo__detalle">Detalle del producto</h2>
      <div className="detalle">
        <article className="col-sm-12 col-lg-4 ">
          <img
            src={`../${props.imagen}`}
            className="card-img-top"
            alt="Auto en venta"
          ></img>
        </article>
        <article className="col-sm-12 col-lg-7 ">
          <div className="text-center itemdetailcontainer__texto">
            <h2 className="">{props.titulo} </h2>
            <p><strong>Descripcion del producto:</strong> {props.texto}</p>
            <p><strong>Categoria:</strong> {props.categoria}</p>
            <p><strong>Stock: </strong>{props.stock}</p>
            <p><strong>Precio:</strong> {props.precio}</p>
            { Quantity == 0 ? <ItemCounts inicial="1" props={props} setQuantity={setearCantidad} /> : (
            <>
            <Link to={"/"}> <button className="btn btn-secondary"> Continuar Comprando</button></Link> 
            <Link to={"/cart"}> <button className="btn btn-success"> Terminar Compra</button></Link> 
            </>)
            }         
          </div>
        </article>
      </div>
    </div>
  );
};

export default ItemDetail;
