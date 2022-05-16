import React, { createContext, useMemo, useState } from 'react';

export const CountriesContext = createContext();

const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);

  const value = useMemo(() => ({
    countries,
    setCountries,
  }));

  return (
    <CountriesContext.Provider value={value}>
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesProvider;
