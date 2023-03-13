import React, { useState, createContext } from 'react';

const SearchresultContext = createContext();

export const SearchresultProvider = ({ children }) => {
  const [searchresult, setSearchresult] = useState([]);

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
