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
    console.log('checkCart:');
    console.log(checkCart);
    if (checkCart > -1) {
      //^ If cart array have same "productId", add quantity + 1 and run  setTotalPrice((prevPrice) => prevPrice + price);
      console.log('Adding just quantity');
      console.log(checkCart);

      const newCart = cart.map((item) => {
        if (item.productId === productId) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      });
      setCart((prevCart) => newCart);

      setTotalPrice((prevPrice) => prevPrice + price);
    } else {
      console.log('Adding new to cart');
      //^ Else, setCart with new product and add to the total price

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
    if (quantity < 1) {
      console.log('removeFromCart:');
      setCart((prevCart) =>
        prevCart.filter((item) => item.productId !== productId)
      );
    }

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
    console.log('removeAll with id:');
    console.log(productId);

    console.log('Cart before:');
    console.log(cart);

    if (quantity < 1) {
      setCart((prevCart) =>
        prevCart.filter((item) => item.productId !== productId)
      );
    }

    setTotalPrice((prevPrice) => prevPrice - removeTotalPrice);
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
