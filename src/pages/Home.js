import React from "react";
import ItemContainer from "../components/ItemContainer/ItemContainer";
import { useParams } from "react-router-dom";


const Home = () => {

  const { category } = useParams()
  let section = (category? "Repuestos de " + category : "Repuestos en venta")

  return (
    <header className="App-header">
      <ItemContainer section={section} />
    </header>
  );
};

export default Home;
