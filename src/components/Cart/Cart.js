import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <>
      {cart.map((cart) => (
        <div key={cart.id}>{cart.title}</div>
      ))}
    </>
  )
}

export default Cart