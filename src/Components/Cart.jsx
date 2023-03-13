import { useState, useContext } from 'react';
import CartItem from './CartItem';
import { ShoppingcartContext } from '.././ShoppingcartContext';

const Cart = () => {
  const { cart, totalPrice } = useContext(ShoppingcartContext);
  return (
    <div>
      <div className="relative shadow-md sm:rounded-lg mt-20 w-max">
        <table className="w-10 text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Qantity
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Remove
              </th>
            </tr>
          </thead>

          {cart.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </table>
      </div>
      <div className="relative shadow-md sm:rounded-lg mt-20 flex justify-between">
        <div className="font-bold text-lg">Total price</div>
        <div className="font-bold text-lg">${totalPrice} </div>
      </div>
    </div>
  );
};

export default Cart;
