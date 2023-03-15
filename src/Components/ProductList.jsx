import { useContext } from 'react';
import { SearchresultContext } from '.././SearchresultContext';
import ProductItem from './ProductItem';
import SearchBar from './SearchBar'; //^ To make routing easier in App component, searchbar is rendered inside of this component

//^ Rendering searchresult array from SearchresultContext where the search is done, using the <ProductItem/> component

const ProductList = () => {
  const { searchresult } = useContext(SearchresultContext);
  return (
    <>
      <SearchBar />
      <div className="mx-10 mt-10">
        <div className="grid xs:grid-cols-2 gap-4 md:grid-cols-3 gap-4 justify-content: center mb-6">
          {searchresult.map((item, index) => (
            <ProductItem key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
