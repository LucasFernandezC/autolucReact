import React from "react";
import ItemCard from "../ItemCard/ItemCard";

const ItemList = ({ dataProducts }) => {
  return (
    <>
      {dataProducts.map((product) => {
        return product.stock > 0 ? (
          <ItemCard key={product.id} props={product} />
        ) : (
          console.log("producto sin stock")
        );
      })}
    </>
  );
};

export default ItemList;
