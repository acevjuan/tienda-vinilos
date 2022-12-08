import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import './ItemCount.css'
import { CartContext } from '../../context/CartContext';

const ItemCount = ( {album, setCount, count} ) => {
  const { addToCart } = useContext(CartContext);

  // Incrementa el contador de productos a agregar al carrito.
  const addToCount = () => {
    if (count < album.stock) {
      setCount(count + 1);
    };
  };
  
    // Reduce el contador de productos a agregar al carrito.
  const removeToCount = () => {
    if (count > 1) {
      setCount(count - 1);
    };
  };
  
  return (
    <div className='main-counter'>
      <div className='item-count__container'>
        <div className='item-count__container__counter'>
          <div className='item-count__container__counter__quantity'>Cantidad:</div>
          <button onClick={removeToCount} className='item-count__container__counter__add-btn'>-</button>
          <div className='item-count__container__counter__number'>{count}</div>
          <button onClick={addToCount} className='item-count__container__counter__remove-btn'>+</button>
        </div>
        <div className='item-count__container__cart'>
          <button className='item-count__container__cart__add' onClick={() => {addToCart(album, count)}}>Agregar a carrito</button>
          <NavLink to='/cart'>
            <button className='item-count__container__cart__finish'>Ir a carrito</button></NavLink>
        </div>
      </div>
    </div>
  )
}

export default ItemCount