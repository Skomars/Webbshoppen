import { useContext } from 'react'; //^ Required for using context
import CartItem from './CartItem';
import { ShoppingcartContext } from '.././ShoppingcartContext'; //^ Importing context so we can use it in here.

//^ Responsible for rendering the items in the cart using the <CartItem/> component. The cart array that´s being rendered out is taken from the ShoppingcartContext. Apart from that, static data for the table is being rendered out exactly the same way each time and at the bottom there´s data for the total price being rendered (Also using the ShoppingcartContext)
const Cart = () => {
  const { cart, totalPrice } = useContext(ShoppingcartContext);
  return (
    <div>
      <div className="relative shadow-md sm:rounded-lg mt-20 w-auto">
        <table className="w-10 text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Add qantity
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Total
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
      <div className="relative shadow-md sm:rounded-lg mt-10 flex justify-between">
        <div className="font-bold text-lg">Total price</div>
        <div className="font-bold text-lg">${totalPrice} </div>
      </div>
    </div>
  );
};

export default Cart;
