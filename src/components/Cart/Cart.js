import React from "react";
import { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import "./cart.css";

const Cart = () => {
  const { cartProducts, clear, deleteProduct, cartCantidad } = useContext(
    cartContext
  );

  let totalcompra = 0;
  cartProducts.forEach((e) => {
    totalcompra += e.cantidad * e.precio;
  });

  return (
    <>
      <div className="cart_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="cart_container">
                <div className="cart_title">
                  Carrito de Compras
                  <small> ({cartCantidad} {cartCantidad == 1 ? "item" : "items"} en tu carrito) </small>
                </div>
                <div className="cart_items">
                  <ul className="cart_list">
                    {cartProducts.length > 0
                      ? cartProducts.map((product) => {
                          return (
                            <li className="cart_item clearfix" key={product.id}>
                              <div className="cart_item_image">
                                <img src={`../${product.imagen}`} alt="" />
                              </div>
                              <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                <div className="cart_item_name cart_info_col">
                                  <div className="cart_item_title">Nombre</div>
                                  <div className="cart_item_text">
                                    {product.titulo}
                                  </div>
                                </div>
                                
                                <div className="cart_item_quantity cart_info_col">
                                  <div className="cart_item_title">
                                    Cantidad
                                  </div>
                                  <div className="cart_item_text">
                                    {product.cantidad}
                                  </div>
                                </div>
                                <div className="cart_item_price cart_info_col">
                                  <div className="cart_item_title">Precio</div>
                                  <div className="cart_item_text">
                                    $ {product.precio}
                                  </div>
                                </div>
                                <div className="cart_item_total cart_info_col">
                                  <div className="cart_item_title">Total</div>
                                  <div className="cart_item_text">
                                    $ {product.cantidad * product.precio}
                                  </div>
                                </div>
                                <div className="cart-product__action">
                                  <DeleteIcon
                                    onClick={() => deleteProduct(product)}
                                  />
                                </div>
                              </div>
                            </li>
                          );
                        })
                      : ""}
                  </ul>
                </div>
                <div className="order_total">
                  <div className="order_total_content text-md-right">
                    <div className="order_total_title">Total compra:</div>
                    <div className="order_total_amount">$ {totalcompra}</div>
                  </div>
                </div>
                <div className="cart_buttons">
                  {" "}
                  <Link to={"/"}>
                    <button type="button" className="button cart_button_clear">
                      Continuar comprando
                    </button>
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
