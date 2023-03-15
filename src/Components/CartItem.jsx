import { useContext } from 'react'; //^ Required for using context
import { ShoppingcartContext } from '.././ShoppingcartContext'; //^ Importing context so we can use it in here.

const CartItem = (props) => {
  //^ Importing from context to be used in this component
  const { addMoreItems, removeAll } = useContext(ShoppingcartContext);

  //^ When "+" for a rendered item is clicked this function runs, sending data to context that handles the status of the shoppingcart and then add one more of this item to the cart
  const addAdditional = () => {
    addMoreItems(props.item.productId, props.item.price, props.item.quantity);
  };

  //^ When "removo" for a rendered item is clicked this function runs, sending data to context that handles the status of the shoppingcart and then remove the full amount of this item that´s currently in the shoppingcart
  const removeAllItems = () => {
    removeAll(props.item.productId, props.item.price, props.item.quantity);
  };

  //^ Here we render one item at a time, using the props from Cart component. We also got a few onCLick function (described above)

  return (
    <tbody>
      <tr className="bg-white border-b hover:bg-gray-50 ">
        <td className="px-6 py-4 font-semibold text-gray-900">
          {props.item.name}
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center space-x-3">
            <div>
              <input
                readOnly
                value={props.item.quantity}
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
        <td className="px-6 py-4 font-semibold text-gray-900 ">
          ${props.item.price * props.item.quantity}
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
    </tbody>
  );
};

export default CartItem;
