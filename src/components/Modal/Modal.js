import React from 'react';
import "./Modal.css";


const Modal = ({title, close, children}) => {

    

    const handleClose = () => {

        close(false)
        document.getElementById("App").style.filter = ""
        document.getElementById("cartblur") && (document.getElementById("cartblur").style.filter = "" ) 
        
    }
    
    return(
        <div className="modal-custom " id='modal' >
            <i className="bi bi-x-lg btncerrar" onClick={() => handleClose()}></i>
            <h2>{title}</h2>
            {children}
        </div>
    )
}

export default Modal