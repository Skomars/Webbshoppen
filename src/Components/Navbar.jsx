import { useContext } from 'react';
import { ShoppingcartContext } from '.././ShoppingcartContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { cart } = useContext(ShoppingcartContext);

  //^ Iterates through every item in cart array and add every quantity. Initially initiated to 0. "totalItemsInCart" is then used at the bottom in the JSX to show number of items in cart (Only renders if cart.length > 0)
  const totalItemsInCart = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  //^ Rendering the navbar. This got two routes, one to the productlist/searchbar, and one to the shoppingcart. And an icon showing the number of total items currently in the cart. If cart array > 0, menaing it´s something there, a red circle with the number is shown. A reducer is being used to get the total number of items (and the quantity of each item!)

  return (
    <>
      <nav className="bg-white px-2 sm:px-4 py-2.5 w-full z-20 top-0 left-0 border-b border-gray-200">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link to="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Magic Store
            </span>
          </Link>
          <div className="flex md:order-2">
            <Link
              to="cart"
              type="button"
              className="relative inline-flex items-center px-5 py-2.5 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8"
              >
                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
              </svg>

              {cart.length > 0 && (
                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-1 -right-0.5">
                  {totalItemsInCart}
                </div>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
