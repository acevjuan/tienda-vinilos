import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);
  return (
    <>
      {cart.map((cart) => (
        <div key={cart.id}>
          <img src={cart.cover} alt={cart.title} style={{ maxWidth: '75px' }} />
          <h3>{cart.title}</h3>
          <h4>{cart.artist}</h4>
          <h5>{cart.quantity}</h5>
          <h5>$ {cart.price * cart.quantity}</h5>
        </div>
      ))}
      <button onClick={clearCart}>Vaciar carrito</button>
    </>
  )
}

export default Cart