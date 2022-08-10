import React from 'react';
import {useState , useContext} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DeleteIcon from '@mui/icons-material/Delete';
import "./CartWidget.css";
import { cartContext } from '../../context/CartContext';


const CartWidget = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const { cartProducts, clear, deleteProduct } = useContext(cartContext)

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return(
        <div className='cart-widget' >
            
            <ShoppingCartIcon 
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            />
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                {cartProducts.map((product) => {
                    return(
                        <div className='item-cart-product' key={product.id}>
                            <img src={`../${product.imagen}`} alt="" />
                            <div className='cart-product__details'>
                                <p>{product.titulo}</p>
                            </div>
                            <div className='cart-product__details'>
                                <p>${product.precio}</p>
                            </div>
                            <div className='cart-product__details'>
                                <p>C. {product.cantidad}</p>
                            </div>
                            <div className='cart-product__action' >
                                <DeleteIcon onClick={() => deleteProduct(product)}/>
                            </div>
                        </div>
                    )
                })}
                <button onClick={() => clear()} className={"btn-delete-all"}>Borrar todo</button>
            </Menu>
        </div>
    )
}

export default CartWidget