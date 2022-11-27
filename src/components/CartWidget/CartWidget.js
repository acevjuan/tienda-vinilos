import { NavLink } from 'react-router-dom';
import cart from '../../assets/cart.png'
import './style.css'

const CartWidget = () => {
  return (
    <NavLink to='/cart' className="nav-bar__cart">
      <img className="nav-bar__cart__img" src={cart} alt="carrito de compras"></img>
    </NavLink>
  )
}

export default CartWidget