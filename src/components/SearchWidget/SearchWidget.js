import React from "react";
import { useState } from "react";
import "./SearchWidget.css";

import Modal from "../Modal/Modal";
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore/lite";
import db from "../../utils/firebaseConfig";

const SearchWidget = () => {

    const [showModal, setShowModal] = useState(false);
    const [success, setSuccess] = useState();
    const [valor, setValor] = useState();
    const [detailProduct, setDetailProduct] = useState({});
    const [detailProducts, setDetailProducts] = useState([]);
  

    const handleChange = (e) => {
        setValor(e.target.value)
    
      }
    
      const handleClick = (e) => {
        setShowModal(true)
        document.getElementById("App").style.filter = "blur(5px)"
      }
    
      const busquedapedido = (e) => {
        e.preventDefault();
        if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(valor)) {
    
          let arraycompleto = []
          getProductMail().then((result) => {
            
            if (result.docs.length != 0) {
              result.forEach((doc) => {
                let objeto = { id: doc.id, fecha: doc.data().fecha, comprador: doc.data().comprador, items: doc.data().items }
                arraycompleto.push(objeto)
                setDetailProducts(arraycompleto)
                
              });
              setSuccess("mail")
    
    
            } else {
              setSuccess("sin datos")
            }
          }
          )
        }
        else {
          getProductOrder().then((data) => {
            if (data != undefined) {
              setDetailProduct(data)
              setSuccess(valor)
    
            } else {
              setSuccess("sin datos")
              setDetailProduct({})
    
            }
          })
        }
        setValor("")
      }
    
      const nuevabusqueda = () => {
        setDetailProducts()
        setSuccess(undefined)
      }
    
    
      const getProductMail = async () => {
        const q = query(collection(db, "orders"), where("comprador.email", "==", valor));
        const querySnapshot = await getDocs(q);
        return querySnapshot
    
      }
      const getProductOrder = async () => {
        
        const docRef = doc(db, 'orders', valor)
        const docSnapshot = await getDoc(docRef)
        let docRes = docSnapshot.data()
        return docRes
      }
    
    

    return(
        <div className="cart-widget">
        <h2><i onClick={() => handleClick()} className="bi bi bi-search carritoIcon"></i></h2>
          
        
        {showModal && (
          <Modal title="Busqueda de pedidos realizados" close={() => setShowModal()}>
            {success == undefined ? (<form action="#" id="form" className="form" onSubmit={busquedapedido}>
              <input
                type="text"
                className="form__text"
                name="busqueda"
                placeholder="Ingrese mail o ID de pedido"
                onChange={handleChange}
                value={valor}
              />
              <button type="submit">Buscar</button>
            </form>)
              :
              (success == "sin datos" ? (
                <>
                  <button className="btn-delete-all " onClick={nuevabusqueda}>Nueva Busqueda</button>
                  <h3>Pedido no encontrado</h3>
                </>
              ) : (success == "mail" ? (
                <>
                  <div>
                    <button className="btn-delete-all " onClick={nuevabusqueda}>Nueva Busqueda</button>
                    {detailProducts.map((pedido) => {
                      return (
                        <div className="">
                          <article>
                            <h2 className="datopedido__h2 ">Datos Pedido {pedido.id}</h2>
                            <p><strong>Fecha: </strong>{pedido.fecha}</p>
                            <p><strong>Nombre: </strong>{pedido.comprador.nombre}</p>
                            <p><strong>Email: </strong>{pedido.comprador.email}</p>
                          </article>
                          <div className="cart_items">
                            <ul className="cart_list">
                              {pedido.items.map((product) => {
  
                                return (
                                  <li className="cart_item clearfix" key={product.id}>
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
                                    </div>
                                  </li>
                                );
                              })
                              }
                            </ul>
  
                          </div>
  
                        </div>
  
  
  
                      )
                    })}
                  </div>
                </>
              ) : (
                <div>
                  <button className="btn-delete-all " onClick={nuevabusqueda}>Nueva Busqueda</button>
  
                  <div className="">
                    <article>
                      <h2 className="datopedido__h2 ">Datos Comprador</h2>
                      <p>{detailProduct.comprador.nombre}</p>
                      <p>{detailProduct.comprador.email}</p>
                    </article>
                    <div className="cart_items">
                      <ul className="cart_list">
                        {detailProduct.items.map((product) => {
  
                          return (
                            <li className="cart_item clearfix" key={product.id}>
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
                              </div>
                            </li>
                          );
                        })
                        }
                      </ul>
  
                    </div>
  
                  </div>
                </div>
              )
              ))
            }
  
          </Modal>)
        }



</div>

    )

}

export default SearchWidget