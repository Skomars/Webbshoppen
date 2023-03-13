import { useContext, useState, useEffect } from 'react';
import { ShoppingcartContext } from '.././ShoppingcartContext';

const CartItem = (props) => {
  const { addMoreItems, removeFromCart, removeAll } =
    useContext(ShoppingcartContext);
  const [quantity, setQuantity] = useState(1);
  const [removeTotalPrice, setRemoveTotalPrice] = useState(props.item.price);

  const addAdditional = () => {
    addMoreItems(
      props.item.name,
      props.item.productId,
      props.item.price,
      props.item.description,
      props.item.image,
      props.item.quantity
    );

    setQuantity((prevQ) => prevQ + 1);
  };
  const removeOneItem = () => {
    removeFromCart(
      props.item.name,
      props.item.productId,
      props.item.price,
      props.item.description,
      props.item.image,
      quantity
    );

    setQuantity((prevQ) => prevQ - 1);
  };

  useEffect(() => {
    setRemoveTotalPrice(quantity * props.item.price);
    console.log(removeTotalPrice);
    console.log(quantity);
    console.log(props.item.price);
  }, [quantity]);

  const removeAllItems = () => {
    removeAll(
      props.item.name,
      props.item.productId,
      props.item.price,
      props.item.description,
      props.item.image,
      props.item.quantity,
      removeTotalPrice
    );

    setQuantity(0);
  };

  return (
    <tbody>
      {quantity > 0 && (
        <tr className="bg-white border-b hover:bg-gray-50 ">
          <td className="px-6 py-4 font-semibold text-gray-900">
            {props.item.name}
          </td>
          <td className="px-6 py-4">
            <div className="flex items-center space-x-3">
              <button
                className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100"
                type="button"
                onClick={removeOneItem}
              >
                <span className="sr-only">Quantity button</span>
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <div>
                <input
                  readOnly
                  value={quantity}
                  type="number"
                  id="third_product"
                  className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg block px-2.5 py-1   "
                  required
                />
              </div>
              <button
                className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full hover:bg-gray-100     "
                type="button"
                onClick={addAdditional}
              >
                <span className="sr-only">Quantity button</span>
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </td>
          <td className="px-6 py-4 font-semibold text-gray-900 ">
            ${props.item.price}
          </td>

          <td className="px-6 py-4">
            <button
              onClick={removeAllItems}
              className="font-medium text-red-600  hover:underline"
            >
              Remove
            </button>
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default CartItem;
