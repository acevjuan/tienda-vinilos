import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import { collection, doc, addDoc, updateDoc, getFirestore } from 'firebase/firestore';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  
  // La suma de los precios de todos los productos agregados al carrito, es decir, el total a pagar por el usuario.
  const [totalPrice, setTotalPrice] = useState(0);

  // La suma total de número de productos agregados al carrito.
  const [totalAlbums, setTotalAlbums] = useState(0);

  // Datos del usuario/comprador para generar la orden de compra.
  const [buyerInfo, setBuyerInfo] = useState({
    name: '',
    phone: '',
    email: ''
  });

  // getTotals asigna los states totalPrice y totalAlbums con el precio final y número de productos respectivamente.
  const getTotals = () => {
    setTotalPrice(cart.reduce((acc, product) => acc + product.price * product.quantity, 0));
    setTotalAlbums(cart.reduce((acc, product) => acc + product.quantity, 0))
  }

  // createOrder genera la orden de compra con los productos agregados al carrito y crea el documento en Firestore con esta información.
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
        alert(`¡Listo! Tu orden fue creada con éxito. El id asignado a tu orden es el siguiente: ${response.id}`);
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

  // Permite utilizar y obtener datos dinámicos en los inputs de formularios.
  const handleInputChange = (event) => {
    setBuyerInfo({
      ...buyerInfo,
      [event.target.name] : event.target.value
    });
  }

  useEffect(() => {
    getTotals();
  }, [cart]);

  // En caso de existir productos en el carrito, se renderiza la información correspondiente.
  if(cart.length > 0) {
    return (
      <div className='cart'>
        <div className='cart__list'>
          {cart.map((cart) => (
            <div key={cart.id} className='cart__list__item'>
              <div className='cart__list__item__cover'>
                <img className='cart__list__item__cover__img' src={cart.cover} alt={cart.title} />
              </div>
              <div className='cart__list__item__info'>
                <h3 className='cart__list__item__info__title'>{cart.title}</h3>
                <h4 className='cart__list__item__info__artist'>{cart.artist}</h4>
                <h5 className='cart__list__item__info__qty'>Cantidad: {cart.quantity}</h5>
                <h5 className='cart__list__item__info__price'>Precio total: $ {cart.price * cart.quantity}</h5>
                <button className='cart__list__item__remove-btn' onClick={() => {removeFromCart(cart.id)}}>Quitar del carrito</button>
              </div>
            </div>
          ))}
        </div>
        
        <div className='cart__detail'>
          <h2 className='cart__detail__title'>Detalles de la compra</h2>
          <h3 className='cart__detail__total-price'>Precio total: $ {(totalPrice).toFixed(2)}</h3>
          <h3 className='cart__detail__total-qty'>Número de productos: {totalAlbums}</h3>
          <div className='cart__detail__user'>
            <h3 className='cart__detail__user__title'>Datos del comprador:</h3>
            <div className='cart__detail__user__form'>
              <div className='cart__detail__user__form__name'>
                <h4 className='cart__detail__user__form__name__title'>Nombre: </h4>
                <input className='cart__detail__user__form__name__input' name='name' type='text' placeholder='Nombre' value={buyerInfo.name} onChange={handleInputChange}/>
              </div>
              <div className='cart__detail__user__form__phone'>
                <h4 className='cart__detail__user__form__phone__title'>Teléfono: </h4>
                <input className='cart__detail__user__form__phone__input' name='phone' type='text' placeholder='Teléfono' value={buyerInfo.phone} onChange={handleInputChange}/>
              </div>
              <div className='cart__detail__user__form__email'>
                <h4 className='cart__detail__user__form__email__title'>E-Mail:</h4>
                <input className='cart__detail__user__form__email__input' name='email' type='text' placeholder='e-mail' value={buyerInfo.email} onChange={handleInputChange}/>
              </div>
            </div>
          </div>
          <button className='cart-page__container__order-btn' onClick={createOrder}>Crear orden</button>
          <button className='cart-page__container__clear-btn' onClick={clearCart}>Vaciar carrito</button>
        </div>
      </div>
    )
  // Si no hay productos en el carrito, se renderizará un aviso y botón para retornar a la página principal.
  } else {
    return(
      <div className='cart-empty'>
        <div className='cart-empty__info'>
          <h2 className='cart-empty__info__main'>Carrito vacío</h2>
          <h3 className='cart-empty__info__message'>Visita el catálogo para elegir las opciones que desees comprar</h3>
          <NavLink to='/'>
            <button className='cart-empty__info__btn'>Ir a catálogo</button>
          </NavLink>
        </div>
      </div>
    )
  }
  
}

export default Cart