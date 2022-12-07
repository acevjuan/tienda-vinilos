import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext([]);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    return cart.some((album) => album.id === id);
  };

  const addToCart = (item, quantity) => {
    if(isInCart(item.id)) {
      alert('el producto ya se encuentra en el carrito');
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const clearCart = () => {
    ;setCart([]);
  }
  
  return(
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
};

export default CartProvider;