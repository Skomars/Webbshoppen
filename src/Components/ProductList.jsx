import { useContext } from 'react';
import { SearchresultContext } from '.././SearchresultContext';
import ProductItem from './ProductItem';

const ProductList = () => {
  const { searchresult } = useContext(SearchresultContext);
  return (
    <div className="mx-10 mt-10">
      <div className="grid grid-cols-3 gap-4 justify-content: center">
        {searchresult.map((item, index) => (
          <ProductItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
