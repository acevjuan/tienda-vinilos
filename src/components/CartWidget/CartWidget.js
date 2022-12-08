import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import cartIcon from '../../assets/cart-icon.png'
import './style.css'

const CartWidget = () => {
  const { cart, totalAdded } = useContext(CartContext);
  
  return (
    <>
      <NavLink to='/cart' className="nav-bar__cart">
        <img className="nav-bar__cart__img" src={cartIcon} alt="carrito de compras" />
      </NavLink>
      <div className={cart.length === 0 ? 'nav-bar__item-count__none' : 'nav-bar__item-count'}>{totalAdded}</div>
    </>
  )
}

export default CartWidget