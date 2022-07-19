import React from "react";
import ItemCard from "../ItemCard/ItemCard"
import './ItemContainer.css'

const ItemContainer = ({section}) => {
  return (
    <article id="results" className="col-md-12">
        <h2>{section}</h2>
      <div id="resultadosBusqueda" className="busquedaresults col-md-12">
          
          <ItemCard texto="4 ptas, Diesel, Sedan, Control de Estabilidad $ 199000" titulo="Ford 2016" imagen={'./assets/images/ford.jpg'} />
          <ItemCard texto="5 ptas, Nafta, Sedan, aire acondicionado $ 200000" titulo="VW 2015" imagen={'./assets/images/vw.jpg'} />
          <ItemCard texto="5 ptas, GNC, Sedan, aire acondicionado $ 150000" titulo="Fiat 2010" imagen={'./assets/images/fiat.jpg'} />
      </div>
    </article>
  );
};

export default ItemContainer;
