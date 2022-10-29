import React from 'react'
import cart from '../../assets/cart.png'
import './style.css'

const CartWidget = () => {
  return (
    <div className="nav-bar__cart">
      <img className="nav-bar__cart__img" src={cart} alt="carrito de compras"></img>
    </div>
  )
}

export default CartWidget