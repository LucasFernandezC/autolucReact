import React from "react";
import { useContext, useState, useEffect } from "react";
import { cartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./cart.css";
import Modal from "../Modal/Modal";
import db from "../../utils/firebaseConfig";
import emailjs from '@emailjs/browser';

import {
  collection,
  addDoc,
  updateDoc,
  doc,
  getDoc

} from "firebase/firestore/lite";


const Cart = () => {
  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState();
  const [validaForm, setValidaForm] = useState(false);
  const [detailProduct, setDetailProduct] = useState({});
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

  useEffect(() => {

    validarform();
  }, [formData])

  const handleTerminar = () => {
    setShowModal(true)
    document.getElementById("cartblur").style.filter = "blur(5px)"

  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitData = (e) => {
    e.preventDefault();
    grabarOrden({ ...orden, comprador: formData })
  };

  const validarform = () => {

    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(formData.email) ? (/^[A-Za-z]/.test(formData.nombre) ? (formData.nombre.length >= 4 ? (formData.telefono.length == 10 ? (!isNaN(formData.telefono) ? setValidaForm(true) : setValidaForm(false)) : setValidaForm(false)) : setValidaForm(false)) : setValidaForm(false)) : setValidaForm(false);

  }


  const sendmail = () => {
    var templateParams = {
      correo: formData.email,
      repuestos: cartCantidad,
      telefono: formData.telefono,
      precio: totalcompra,
      reserva: success
    };

    emailjs.init("qO6vBxY3qj1kt6g7l");
    emailjs.send("default_service", "template_atamx5h", templateParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    )
  }


  const grabarOrden = async (agregarOrden) => {

    const collectionOrden = collection(db, "orders");
    addDoc(collectionOrden, agregarOrden).then((ordenDoc) => {
      setSuccess(ordenDoc.id);

      //al confirmar la orden se actualiza el stock de los productos del carrito
      orden.items.forEach((element) => {
        const docRef = doc(db, "products", element.id);
        const data = {
          stock:
            cartProducts.find((dato) => dato.id == element.id).stock -
            element.cantidad,
        };
        updateDoc(docRef, data).then((docRef) => {
          console.log("actualice stock");
        });
      });
      // fin actualizacion stock
      //envio mail de confirmacion al usuario
      sendmail();
      //fin de envio de mail de confirmacion al usuario
      //limpio el carrito
      clear();
      //fin limpio carrito
      //muestro la orden por un momento y vuelvo a la pantalla de compra
      setTimeout(() => {
        setShowModal(false);
      }, 4000);
      //fin muestro orden
    });

  };

  return (
    <>
      <div className="cart_section" >
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="cart_container" >
                <div className="cart_title" >
                  Carrito de Compras
                  <small>
                    {" "}
                    ({cartCantidad} {cartCantidad == 1 ? "item" : "items"} en tu
                    carrito){" "}
                  </small>
                </div>
                <div className="cart_items" id="cartblur">
                  <ul className="cart_list" >
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
                                <div onClick={() => deleteProduct(product)}>
                                  <i className="bi bi-trash"></i>
                                </div>
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
                  {cartCantidad > 0 &&
                    [!success && (
                      <button
                        type="button"
                        onClick={() => handleTerminar()}
                        className="button cart_button_clear"
                      >
                        Finalizar compra
                      </button>
                    )]}
                </div>

                {showModal && (
                  <Modal title="Datos para su Pedido" close={() => setShowModal()}>
                    {success == undefined ? (
                      <form action="#" id="form" className="form" onSubmit={submitData}>
                        <input
                          type="text"
                          className="form__text"
                          name="nombre"
                          placeholder="Ingrese el nombre"
                          onChange={handleChange}
                          value={formData.name}
                        />
                        <input
                          type="number"
                          className="form__number"
                          name="telefono"
                          placeholder="Ingrese el telefono"
                          onChange={handleChange}
                          value={formData.phone}
                        />
                        <input
                          type="email"
                          className="form__email"
                          name="email"
                          placeholder="Ingrese el mail"
                          onChange={handleChange}
                          value={formData.email}
                        />
                        {validaForm == true ?
                          (<button type="submit">Registrarse</button>) :
                          (<><p className="error__titulo">- Verifique los campos ingresados - </p>
                            <p className="error__descripcion">El nómbre debe tener al menos 4 caracteres</p>
                            <p className="error__descripcion">El teléfono solo puede contener números y debe tener una longitud de 10 caracteres</p>
                            <p className="error__descripcion">El mail debe ser un correo válido </p> </>)
                        }
                      </form>
                    ) : (


                      <>
                        <h2>
                          Su orden se genero y sera procesada a la brevedad
                        </h2>
                        <p>Numero de seguimiento : {success}</p>
                      </>


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
