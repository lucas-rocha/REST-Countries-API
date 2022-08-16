import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import useCountries from '../../Utils/Hooks/useCountries';
import { searchCountryByInputName } from '../../Utils/filterCountries';

import { Container, Input, SearchIcon } from './styles';

const SearchBar: React.FC = () => {
  const { countries, setCountries } = useCountries();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const countryLowerCase = e.target.value.toLowerCase();
    const filteredCountries = searchCountryByInputName(countryLowerCase);
    setCountries(filteredCountries);
  };

  return (
    <Container>
      <SearchIcon>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </SearchIcon>
      <Input
        type="text"
        placeholder="Search for a country..."
        onChange={inputHandler}
      />
    </Container>
  );
};

export default SearchBar;
