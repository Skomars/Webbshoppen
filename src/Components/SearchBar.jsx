import { useState, useContext } from 'react';
import products from '../products.json'; //^ Imported productlist
import { SearchresultContext } from '.././SearchresultContext'; // ^Importing the context

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [filteredList] = useState(products);
  const { searchProducts } = useContext(SearchresultContext);

  //^ At searchbutton click, try to find matching description or name by using filtermethod. the new filtered array is then being set in searchresultcontext through the searchProducts function in that context
  const searchBtnClicked = (e) => {
    e.preventDefault();

    const filtered = filteredList.filter(
      (item) =>
        (item.name && item.name.toLowerCase().includes(query.toLowerCase())) ||
        (item.description &&
          item.description.toLowerCase().includes(query.toLowerCase()))
    );
    searchProducts(filtered);
    setQuery(''); //^ Clearing searchquery
  };

  //^ Updating searchstring
  const setSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="w-3/4">
      <form className="mt-6">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            onChange={setSearch}
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search product..."
            value={query}
          />
          <button
            onClick={searchBtnClicked}
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
