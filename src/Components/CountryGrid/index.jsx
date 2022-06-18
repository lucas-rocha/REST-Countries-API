import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getCountries } from '../../Api/Services/Countries';
import useCountries from '../../Utils/Hooks/useCountries';

import CountryGridItem from '../CountryGridItem';

import { Container } from './styles';

const CountryGrid = () => {
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
      {countries.map((country) => (
        <Link to={`country/${country.name.common.toLowerCase()}`}>
          <CountryGridItem
            key={country.cca2}
            flag={country.flags.png}
            name={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        </Link>
      ))}
    </Container>
  );
};

export default CountryGrid;
