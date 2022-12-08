import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import cartIcon from '../../assets/cart-icon.png'
import './style.css'

const CartWidget = () => {
  const { cart, totalAdded } = useContext(CartContext);
  
  return (
    <div className='nav-bar__cart__container'>
      <NavLink to='/cart' className="nav-bar__cart__container__icon">
        <img className="nav-bar__cart__container__icon_img" src={cartIcon} alt="carrito de compras" />
      </NavLink>
      <div className={cart.length === 0 ? 'nav-bar__cart__container__item-count-none' : 'nav-bar__cart__container__item-count'}>{totalAdded}</div>
    </div>
  )
}

export default CartWidget