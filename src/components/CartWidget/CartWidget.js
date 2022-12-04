import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import cartIcon from '../../assets/cart-icon.png'
import './style.css'

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  
  return (
    <>
      <NavLink to='/cart' className="nav-bar__cart">
        <img className="nav-bar__cart__img" src={cartIcon} alt="carrito de compras" />
      </NavLink>
      <div style={{ color: 'white' }}>{cart.length}</div>
    </>
  )
}

export default CartWidget