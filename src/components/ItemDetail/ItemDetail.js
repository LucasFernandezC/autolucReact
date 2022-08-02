import React from "react";
import './ItemDetail.css'



const ItemDetail = ({props}) => {

 //const[id, texto, imagen] = props;
console.log(props)
  return (
    <div>
       <h3 className="titulo__detalle">DETALLE DE PRODUCTO</h3>
      <div className="detalle">
      <article className="col-md-7">
        <img
          src={props.imagen}
          className="card-img-top"
          alt="Auto en venta"
        ></img>
        </article>
        <article className="col-md-5">
        <div className="text-center">
          <h2 className="">{props.titulo} </h2>
          <p>{props.texto}
          </p>
          <p>
          {props.stock}
          </p>
          <p>
          $ 200000
          </p>
          <button>Comprar!</button>

        </div>
      </article>
      </div>
    </div>
  );
}

export default ItemDetail;
