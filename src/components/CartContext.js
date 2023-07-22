import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const existingCart = localStorage.getItem('myCart') != undefined ? JSON.parse(localStorage.getItem('myCart')) : [];
  const [item, setItem] = useState(existingCart);
  // const [size, setSize] = useState(existingCart.length);
  // const size = item.reduce((total, currentItem) => total + currentItem.quantity, 0);

  const calculateTotalSize = () => {
    return item.reduce((total, currentItem) => total + currentItem.quantity, 0);
  };

  const [size, setSize] = useState(calculateTotalSize());


  useEffect(() => {
    localStorage.setItem('myCart', JSON.stringify(item));
    setSize(item.length);
  }, [item]);

  const increment = (value) => {
    setItem([...item, { ...value, quantity: 1 }]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...item];
    updatedCart.splice(index, 1);
    setItem(updatedCart);
  };

  const updateQuantity = (index, quantity) => {
    if (quantity >= 1) {
      const updatedCart = [...item];
      updatedCart[index].quantity = quantity;
      setItem(updatedCart);
    }
  };

  return (
    <CartContext.Provider value={{ item, size, increment, removeFromCart, updateQuantity }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;




