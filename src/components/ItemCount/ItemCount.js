import { useState } from 'react';

const ItemCount = () => {
  const [count, setCount] = useState(0);
  let stk = 10;
  const addCart = () => {
    if (count < stk) {
      setCount(count + 1)
    }
  };
  const removeCart = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  return (
    <div>
      <div>Agregar a carrito</div>
      <div>{count}</div>
      <div>
        <button onClick={removeCart}>-</button>
        <button onClick={addCart}>+</button>
      </div>
    </div>
  )
}

export default ItemCount