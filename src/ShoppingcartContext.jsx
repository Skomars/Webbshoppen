import React, { useState, createContext } from 'react';

//^ Create the context and provider
const ShoppingcartContext = createContext();
export const ShoppingcartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  //^ Function used by the ProductItem. If product is not existing in the cart already, add the new product. Otherwise, add 1 to the quantity
  const addToCart = (name, productId, price, quantity) => {
    //^ Returns -1 as index if not found in the cart array
    const checkCart = cart.findIndex((item) => item.productId === productId);

    //^ Add as a new product and add price to the total
    if (checkCart === -1) {
      setCart([...cart, { name, productId, price, quantity }]);
      setTotalPrice((prevPrice) => prevPrice + price);
    }
    //^ Already in the cart.. Add only quantity add price to the total
    else {
      const newArray = cart.map((item) => {
        if (item.productId === productId) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });

      setCart(newArray);
      setTotalPrice((prevPrice) => prevPrice + price);
    }
  };

  //^ From the CartItem, adding quantity to the current product. Also increase total price
  const addMoreItems = (productId, price, quantity) => {
    const newArray = cart.map((item) => {
      if (item.productId === productId) {
        return { ...item, quantity: quantity + 1 };
      } else {
        return item;
      }
    });

    setCart(newArray);
    setTotalPrice((prevPrice) => prevPrice + price);
  };

  //^ Remove all quantity for the product (Filtering out the product and setting the new total price)
  const removeAll = (productId, price, quantity) => {
    const totalPriceToRemove = quantity * price;
    setTotalPrice((prevPrice) => prevPrice - totalPriceToRemove);

    setCart((prevCart) =>
      prevCart.filter((item) => item.productId !== productId)
    );
  };

  return (
    <ShoppingcartContext.Provider
      value={{
        cart,
        addToCart,
        totalPrice,
        addMoreItems,
        removeAll,
      }}
    >
      {children}
    </ShoppingcartContext.Provider>
  );
};

export { ShoppingcartContext };
