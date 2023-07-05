import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const existingCart = localStorage.getItem('myCart') != undefined ? JSON.parse(localStorage.getItem('myCart')) : [];
  const [item, setItem] = useState(existingCart);
  const [size, setSize] = useState(existingCart.length);

  useEffect(() => {
    localStorage.setItem('myCart', JSON.stringify(item));
    setSize(item.length);
  }, [item]);

  const increment = (value) => {
    setItem([...item, value]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...item];
    updatedCart.splice(index, 1);
    setItem(updatedCart);
  };

  return (
    <CartContext.Provider value={{ item, size, increment, removeFromCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;




