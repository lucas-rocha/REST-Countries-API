import React, { useState, useEffect } from 'react';

import { getCountries } from '../../Api/Services/Countries';

import CountryGridItem from '../CountryGridItem';

import { Container } from './styles';

const CountryGrid = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries().then((response) => {
      setCountries(response.data);
    });
  }, [countries]);

  return (
    <Container>
      {countries.map((country) => (
        <CountryGridItem
          key={country.ccn3}
          flag={country.flags.png}
          name={country.name.common}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
      ))}
    </Container>
  );
};

export default CountryGrid;
