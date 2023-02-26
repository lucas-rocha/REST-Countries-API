import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getCountries } from '../../Api/Services/Countries';
import useCountries from '../../Utils/Hooks/useCountries';

import CountryGridItem from '../../Components/CountryGridItem';
import LoadingSpinner from '../../Components/LoadingSpinner';

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCountries()
      .then((response) => {
        localStorage.setItem('countries', JSON.stringify(response));
        setCountries(response);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error.message);
      });
  }, []);

  return (
    <Container>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        countries?.map((country: CountryItems) => (
          <Link
            to={`country/${country.name.common.toLowerCase()}`}
            key={country.cca2}
          >
            <CountryGridItem
              flag={country.flags.png}
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          </Link>
        ))
      )}
    </Container>
  );
};

export default CountryGrid;
