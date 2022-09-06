import React from 'react';
import "./Modal.css";


const Modal = ({title, close, children}) => {
    return(
        <div className="modal-custom">
            <i className="bi bi-x-lg btncerrar" onClick={() => close(false)}></i>
            <h2>{title}</h2>
            {children}
        </div>
    )
}

export default Modal