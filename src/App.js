import './App.css';
import SearchBar from './Components/SearchBar';
import ProductList from './Components/ProductList';
import Navbar from './Components/Navbar';
import Cart from './Components/Cart';

import { SearchresultProvider } from './SearchresultContext';
import { ShoppingcartProvider } from './ShoppingcartContext';

//^ Insert routing for  1: <SearchBar /> and <ProductList />, and 2: <Cart />

function App() {
  return (
    <ShoppingcartProvider>
      <SearchresultProvider>
        <Navbar />
        <SearchBar />
        <ProductList />
        <Cart />
      </SearchresultProvider>
    </ShoppingcartProvider>
  );
}

export default App;
