import { useContext } from 'react';
import { CountriesContext } from '../Context/CountriesContext';

const useCountries = () => {
  const context = useContext(CountriesContext);
  if (!context)
    throw new Error('useCountries must be used within a CountriesProvider');
  const { countries, setCountries } = context;
  return { countries, setCountries };
};

export default useCountries;
