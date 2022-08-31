import React from 'react';
import "./Modal.css";


const Modal = ({title, close, children}) => {
    return(
        <div className="modal-custom">
            <h2>{title}</h2>
            <button onClick={() => close(false)}/>
            {children}
        </div>
    )
}

export default Modal