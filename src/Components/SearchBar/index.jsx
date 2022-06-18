import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { Container, Input, SearchIcon } from './styles';
import useCountries from '../../Utils/Hooks/useCountries';
import searchCountryByInputName from '../../Utils/searchCountryByInputName';

const SearchBar = () => {
  const { setCountries } = useCountries();
  const [inputText, setInputText] = useState();

  const inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
    const filteredCountries = searchCountryByInputName(inputText);
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
