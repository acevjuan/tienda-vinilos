import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import { collection, doc, addDoc, updateDoc, getFirestore } from 'firebase/firestore';
import moment from 'moment';
import './Cart.css';

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);
  
  const [totalPrice, setTotalPrice] = useState(0);

  const [totalAlbums, setTotalAlbums] = useState(0);

  const [buyerInfo, setBuyerInfo] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const getTotals = () => {
    setTotalPrice(cart.reduce((acc, product) => acc + product.price * product.quantity, 0));
    setTotalAlbums(cart.reduce((acc, product) => acc + product.quantity, 0))
  }

  const createOrder = () => {
    const db = getFirestore();
    const query = collection(db, 'orders');
    const newOrder = {
      buyer: {
        name: buyerInfo.name,
        phone: buyerInfo.phone,
        email: buyerInfo.email
      },

      items: cart,
      date: moment().format('DD/MM/YYYY'),
      total: totalAlbums
    }
    addDoc(query, newOrder)
      .then((response) => {
        alert(`Orden creadad con el id ${response.id}`);
        clearCart();
        return response;
      })
      .then((res) => {
        cart.forEach((album) => {
          const query = doc(db, 'albums', album.id);
          updateDoc(query, {
            stock: album.stock - album.quantity
          });
        });
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getTotals();
  }, [cart]);

  const handleInputChange = (event) => {
    setBuyerInfo({
      ...buyerInfo,
      [event.target.name] : event.target.value
    });
  }

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
        <div>
          <input name='name' type='text' placeholder='Nombre' value={buyerInfo.name} onChange={handleInputChange}/>
          <input name='phone' type='text' placeholder='Teléfono' value={buyerInfo.phone} onChange={handleInputChange}/>
          <input name='email' type='text' placeholder='e-mail' value={buyerInfo.email} onChange={handleInputChange}/>
        </div>
        <button onClick={createOrder}>Crear orden</button>
      </>
    )
  } else {
    return(<h2>Carrito vacío</h2>)
  }
  
}

export default Cart