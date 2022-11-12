import { useState } from 'react';

const ItemCount = () => {
  const [count, setCount] = useState(0);
  const addCart = () => setCount(count + 1);
  const removeCart = () => setCount(count - 1);
  return (
    <div>
      <div>Agregar a carrito</div>
      <div>{count}</div>
      <div>
        <button onClick={addCart}>+</button>
        <button onClick={removeCart}>-</button>
      </div>
    </div>
  )
}

export default ItemCount