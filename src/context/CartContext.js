import { createContext, useState, useEffect } from "react";

export const CartContext = createContext([]);

const CartProvider = ({ children }) => {
  // cart almacena la información de productos a comprar. Es utilizado en el resto de la aplicación.
  const [cart, setCart] = useState([]);

  // totalAdded se utiliza para mostrar el número de productos agregados al carrito en el CartWidget.
  const [totalAdded, setTotalAdded] = useState(0);

  // Con getItemsTotals cambiamos el valor del state totalAdded según la cantidad total de items en cart.
  const getItemsTotals = () => {
    setTotalAdded(cart.reduce((acc, product) => acc + product.quantity, 0));
  }

  // isInCart verifica si un producto ya se encuentra o no en el carrito (cart). Se utiliza en la función addToCart.
  const isInCart = (id) => {
    return cart.some((album) => album.id === id);
  };

  // addToCart agrega productos a cart.
  const addToCart = (item, quantity) => {
    if(isInCart(item.id)) {
      alert('Esta album ya se encuentra en el carrito. No puedes agregar más.');
    } else {
      setCart([...cart, { ...item, quantity }]);
      alert('¡Listo! ¡Album agregado al carrito!');
    }
  };

  // removeFromCart elimina un producto en específico de cart. Se usa para evento en el carrito.
  const removeFromCart = (id) => setCart(cart.filter((product) => product.id !== id));

  // clearCart resetea el cart como un arreglo vacío, es decir, limpia todo el carrito de compras.
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