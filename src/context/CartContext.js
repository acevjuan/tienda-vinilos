import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext([]);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    setCart([...cart, { ...item, quantity }]);
  }

  const clearCart = () => {
    setCart([]);
  }
  
  return(
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
};

export default CartProvider;