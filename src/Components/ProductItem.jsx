import React, { useContext, useState } from 'react';
import { ShoppingcartContext } from '../ShoppingcartContext';
import './ProductItem.css';

const ProductItem = (props) => {
  const { addToCart } = useContext(ShoppingcartContext); //^ Import of the addToCart function from shoppingcartcontext
  const [showModal, setShowModal] = useState(false); //^To keep track if modal is active or not.

  //^When we click "Show more" for a product, we activate the modal
  function handleShowMoreClick() {
    setShowModal(true);
    document.body.style.overflow = 'hidden'; //^ Disable scrolling
  }

  //^To close a modal, the "Close" button is connected to this function. Sets showModal state back to 'false'
  function handleModalClose() {
    setShowModal(false);
    document.body.style.overflow = 'auto'; //^ Enable scrolling
  }

  //^ Adding an item to the cart from this view will use the addToCart function in the shoppingcartcontext. One click will add the item, and more clicks on the same item will add on to the quantity
  const addBtnClicked = () => {
    addToCart(
      props.item.name,
      props.item.productId,
      props.item.price,
      props.item.quantity
    );
  };

  return (
    <div>
      <div className=" w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <div className="mx-auto">
          <img
            className="p-8 rounded-t-lg "
            src={props.item.image}
            alt={props.item.name}
          />
        </div>
        <div className="px-5 pb-5">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900">
            {props.item.name}
          </h5>

          <h6 className="text-sm font-semibold tracking-tight text-gray-500">
            {props.item.productId}
          </h6>

          <div className="flex items-center mt-2.5 mb-5">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Second star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Third star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fourth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fifth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">
              5.0
            </span>
          </div>

          <div className="flex flex-col items-center justify-between">
            <span className="text-3xl font-bold text-gray-900">
              ${props.item.price}
            </span>

            <div className="flex gap-2 mt-2">
              <button
                onClick={addBtnClicked}
                className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Add to cart
              </button>

              <button
                onClick={handleShowMoreClick}
                className="text-white bg-green-700 hover:bg-green-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Show more
              </button>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="modal-backdrop onClick={handleModalClose}">
          <div className="modal" onClick={(event) => event.stopPropagation()}>
            <div className="modal-content">
              <img
                className="p-8 rounded-t-lg "
                src={props.item.image}
                alt={props.item.name}
              />
              <h2 className="text-2xl font-bold">{props.item.name}</h2>
              <p className="text-xl">({props.item.productId})</p>
              <p className="text-xl">{props.item.description}</p>
              <p className="text-xl font-bold">${props.item.price}</p>

              <button
                onClick={handleModalClose}
                className="text-white bg-green-700 hover:bg-green-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4"
              >
                Go back
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductItem;
