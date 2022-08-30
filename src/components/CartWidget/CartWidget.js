import React from "react";
import { useState, useContext } from "react";
import "./CartWidget.css";
import { cartContext } from "../../context/CartContext";
import { NavDropdown } from "react-bootstrap";


const CartWidget = () => {
  
  const { cartProducts, clear, deleteProduct, cartCantidad } = useContext(
    cartContext
  );

  
  return (
    <div className="cart-widget">
      
      <NavDropdown
        title={
          <span>
            <h2><i className="bi bi-cart-fill carritoIcon"></i></h2>
          </span>
        }
        id="collasible-nav-dropdown"
      >
          {cartProducts.map((product) => {
          return (
            <NavDropdown.Item>
            <div className="item-cart-product" key={product.id}>
              <img src={`../${product.imagen}`} alt="" />
              <div className="cart-product__details">
                <p>{product.titulo}</p>
              </div>
              <div className="cart-product__details">
                <p>${product.precio} </p>
              </div>
              <div className="cart-product__details">
                <p> Cant.: {product.cantidad}</p>
              </div>
              <div className="cart-product__action">
                <div onClick={() => deleteProduct(product)}>
                  <i class="bi bi-trash"></i>
                </div>{" "}
              </div>
            </div>
            </NavDropdown.Item>
          );
        })}
        
        {cartCantidad > 0 && (
            <NavDropdown.Item >
          <button onClick={() => clear()} className={"btn-delete-all"}>
            Borrar todo
          </button>
          </NavDropdown.Item>
        )}
      </NavDropdown>
      {cartCantidad > 0 ? <p>{cartCantidad}</p> : ""}
    </div>
  );
};

export default CartWidget;
