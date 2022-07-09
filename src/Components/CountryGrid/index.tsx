import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getCountries } from '../../Api/Services/Countries';
import useCountries from '../../Utils/Hooks/useCountries';

import CountryGridItem from '../CountryGridItem';

import { Container } from './styles';

export interface CountryItems {
  cca2: string;
  flags: {
    png: string;
  };
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string;
}

const CountryGrid: React.FC = () => {
  const { countries, setCountries } = useCountries();

  useEffect(() => {
    getCountries().then((response) => {
      try {
        localStorage.setItem('countries', JSON.stringify(response.data));
        return setCountries(response.data);
      } catch (error) {
        return error;
      }
    });
  }, []);

  return (
    <Container>
      {countries.map((country: CountryItems) => (
        <Link
          to={`country/${country.name.common.toLowerCase()}`}
          key={country.cca2}
        >
          <CountryGridItem
            flag={country.flags.png}
            name={country.name.common}
            population={country.population}
            region={country.capital}
            capital={country.capital}
          />
        </Link>
      ))}
    </Container>
  );
};

export default CountryGrid;
