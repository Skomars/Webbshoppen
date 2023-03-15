import './App.css';
import ProductList from './Components/ProductList';
import Navbar from './Components/Navbar';
import Cart from './Components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; //^ For routing

import { SearchresultProvider } from './SearchresultContext';
import { ShoppingcartProvider } from './ShoppingcartContext';

//^ Using routing for ProductList/SearchBar and Cart component. Navbar is always visible
//^ Importing and wrapping the app with providers so we can use context data

function App() {
  return (
    <ShoppingcartProvider>
      <SearchresultProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </SearchresultProvider>
    </ShoppingcartProvider>
  );
}

export default App;
