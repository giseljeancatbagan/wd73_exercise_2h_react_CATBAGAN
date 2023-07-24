// CartContext.js

import React, { useState, createContext, useContext } from "react";

// Create the context
const CartContext = createContext();

// Create a custom hook to access the cart context
export const useCartContext = () => useContext(CartContext);

// CartProvider component to wrap around the components that need access to the cart data
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
