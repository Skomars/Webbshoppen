//^ A small provider and context for handling searchresultdata
import React, { useState, createContext } from 'react';

const SearchresultContext = createContext();

export const SearchresultProvider = ({ children }) => {
  //^ searchresult is used in the ProductList component to render on front-end.
  const [searchresult, setSearchresult] = useState([]);

  //^ Function is called in SearchBar component
  const searchProducts = (queryresult) => {
    setSearchresult(queryresult);
  };

  return (
    <SearchresultContext.Provider value={{ searchresult, searchProducts }}>
      {children}
    </SearchresultContext.Provider>
  );
};

export { SearchresultContext };
