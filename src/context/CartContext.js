import { createContext, useEffect } from "react";
import { useState } from "react";

export const CartContext = createContext([]);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [totalAdded, setTotalAdded] = useState(0);

  const getItemsTotals = () => {
    setTotalAdded(cart.reduce((acc, product) => acc + product.quantity, 0));
  }

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

  const removeFromCart = (id) => setCart(cart.filter((product) => product.id !== id));

  const clearCart = () => {
    setCart([]);
  };
  
  useEffect(() => {
    getItemsTotals();
  }, [cart])

  return(
    <CartContext.Provider value={{ cart, totalAdded, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
};

export default CartProvider;