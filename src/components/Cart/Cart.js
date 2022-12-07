import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);
  
  const [totalPrice, setTotalPrice] = useState(0);

  const [totalAlbums, setTotalAlbums] = useState(0);

  const getTotals = () => {
    setTotalPrice(cart.reduce((acc, product) => acc + product.price * product.quantity, 0));
    setTotalAlbums(cart.reduce((acc, product) => acc + product.quantity, 0))
  }

  useEffect(() => {
    getTotals();
  }, [cart]);

  if(cart.length > 0) {
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
        <h2>Total price: $ {totalPrice}</h2>
        <h2>Total albums: {totalAlbums}</h2>
      </>
    )
  } else {
    return(<h2>Carrito vacío</h2>)
  }
  
}

export default Cart