import { useState } from 'react';
import './ItemCount.css'

const ItemCount = () => {
  const [count, setCount] = useState(0);
  let stk = 10;
  const addItem = () => {
    if (count < stk) {
      setCount(count + 1)
    }
  };
  const removeItem = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  
  return (
    <div className='main-counter'>
      <div className='item-count__container'>
        <div className='item-count__container__counter'>
          <div className='item-count__container__counter__quantity'>Cantidad:</div>
          <button onClick={removeItem} className='item-count__container__counter__add-btn'>-</button>
          <div className='item-count__container__counter__number'>{count}</div>
          <button onClick={addItem} className='item-count__container__counter__remove-btn'>+</button>
        </div>
        <div className='item-count__container__cart'>
          <button className='item-count__container__cart__add'>Agregar a carrito</button>
          <button className='item-count__container__cart__finish'>Terminar compra</button>
        </div>
      </div>
    </div>
  )
}

export default ItemCount