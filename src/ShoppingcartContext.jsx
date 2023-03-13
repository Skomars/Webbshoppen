import React, { useState, useEffect, createContext } from 'react';

const ShoppingcartContext = createContext();

export const ShoppingcartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    console.log('Updated Shoppingcart in ShoppingcartContext:');
    console.log(cart);
    console.log(totalPrice);
  }, [cart]);

  const addToCart = (name, productId, price, description, image, quantity) => {
    const checkCart = cart.findIndex((item) => item.productId === productId);

    if (checkCart !== undefined) {
      //^ If cart arrays have same "productId", add quantity + 1 and run  setTotalPrice((prevPrice) => prevPrice + price);

      setCart([
        ...cart,
        { name, productId, price, description, image, quantity },
      ]);

      setTotalPrice((prevPrice) => prevPrice + price);
    } else {
      //^ Else, setCart with new product and add total price

      setCart([
        ...cart,
        { name, productId, price, description, image, quantity },
      ]);
      setTotalPrice((prevPrice) => prevPrice + price);
    }
  };

  const addMoreItems = (
    name,
    productId,
    price,
    description,
    image,
    quantity
  ) => {
    setTotalPrice((prevPrice) => prevPrice + price);
  };

  const removeFromCart = (
    name,
    productId,
    price,
    description,
    image,
    quantity
  ) => {
    setTotalPrice((prevPrice) => prevPrice - price);
  };

  const removeAll = (
    name,
    productId,
    price,
    description,
    image,
    quantity,
    removeTotalPrice
  ) => {
    setTotalPrice((prevPrice) => prevPrice - removeTotalPrice);
    console.log('remove all func');
  };

  return (
    <ShoppingcartContext.Provider
      value={{
        cart,
        addToCart,
        totalPrice,
        removeFromCart,
        addMoreItems,
        removeAll,
      }}
    >
      {children}
    </ShoppingcartContext.Provider>
  );
};

export { ShoppingcartContext };
