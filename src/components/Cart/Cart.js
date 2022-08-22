import React from "react";
import { useContext, useState } from "react";
import { cartContext } from "../../context/CartContext";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import "./cart.css";
import Modal from "../Modal/Modal";
import db from "../../utils/firebaseConfig";
import { collection, addDoc, updateDoc,  doc } from "firebase/firestore/lite";
import { async } from "@firebase/util";

const Cart = () => {
  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState();
  const { cartProducts, clear, deleteProduct, cartCantidad } = useContext(
    cartContext
  );

  let totalcompra = 0;
  cartProducts.forEach((e) => {
    totalcompra += e.cantidad * e.precio;
  });

  const [orden, setOrden] = useState({
    items: cartProducts.map((product) => {
      return {
        id: product.id,
        titulo: product.titulo,
        precio: product.precio,
        cantidad: product.cantidad,
      };
    }),
    comprador: {},
    fecha: new Date().toLocaleString(),
    total: totalcompra,
  });

  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });

  const updateDb = () => {

    const docRef = doc(db, "products", "2lZSuyaRQJBlrZQiGmpV");
    const data = {
      stock: 100
    }
    updateDoc(docRef, data)
  .then(docRef => {
    console.log("actualice stock");
})
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitData = (e) => {
    e.preventDefault();
    grabarOrden({ ...orden, comprador: formData });
  };

  const grabarOrden = async (agregarOrden) => {
    const collectionOrden = collection(db, "orders");
    const ordenDoc = await addDoc(collectionOrden, agregarOrden)
    setSuccess(ordenDoc.id)
    orden.items.forEach((element) => {
      const docRef = doc(db, "products", element.id);
      const data = {
      stock: (cartProducts.find(dato => dato.id == element.id).stock - element.cantidad) 
    }
    updateDoc(docRef, data)
    .then(docRef => {
      console.log("actualice stock");
      })
    })
    clear();
    setTimeout(()=>{
      setShowModal(false);
            },3000);
    
  };

  return (
    <>
      <div className="cart_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="cart_container">
                <div className="cart_title">
                  Carrito de Compras
                  <small>
                    {" "}
                    ({cartCantidad} {cartCantidad == 1 ? "item" : "items"} en tu
                    carrito){" "}
                  </small>
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
                <Link to="/">
                    <button type="button" className="button cart_button_clear">
                      Continuar Comprando
                    </button>
                  </Link>
                  {!success && <button
                    type="button"
                    onClick={() => setShowModal(true)}
                    className="button cart_button_clear">
                    Finalizar compra
                  </button>}
                </div>

                {showModal && (
                  <Modal title="DATOS DE CONTACTO" close={() => setShowModal()}>
                    {success ? (
                      <>
                        <h2>Su orden se genero y sera procesada a la brevedad</h2>
                        <p>Numero de seguimiento : {success}</p>
                      </>
                    ) : (
                      <form onSubmit={submitData}>
                        <input
                          type="text"
                          name="nombre"
                          placeholder="Ingrese el nombre"
                          onChange={handleChange}
                          value={formData.name}
                        />
                        <input
                          type="number"
                          name="telefono"
                          placeholder="Ingrese el telefono"
                          onChange={handleChange}
                          value={formData.phone}
                        />
                        <input
                          type="email"
                          name="email"
                          placeholder="Ingrese el mail"
                          onChange={handleChange}
                          value={formData.email}
                        />
                        <button type="submit">Enviar</button>
                      </form>
                    )}
                  </Modal>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
