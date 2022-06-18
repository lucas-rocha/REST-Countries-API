import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import searchCountryByRegion from '../../Utils/searchCountryByRegion';

import {
  Container,
  SelectContainer,
  SelectIcons,
  SelectList,
  SelectOption,
} from './styles';
import useCountries from '../../Utils/Hooks/useCountries';

const FilterBar = () => {
  const { setCountries } = useCountries();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  const filterByRegion = (region) => {
    const filteredCountries = searchCountryByRegion(region);
    setCountries(filteredCountries);
  };

  return (
    <Container>
      <SelectContainer>
        <span>{selectedRegion || 'Filter by Region'}</span>
        <SelectIcons>
          {selectedRegion ? (
            <FontAwesomeIcon
              icon={faCircleXmark}
              onClick={() => {
                setSelectedRegion(null);
                filterByRegion(null);
              }}
            />
          ) : null}
          <FontAwesomeIcon
            icon={faAngleDown}
            onClick={() => setIsOpen(!isOpen)}
          />
        </SelectIcons>
      </SelectContainer>
      {isOpen ? (
        <SelectOption>
          {regions.map((region) => (
            <SelectList
              key={region}
              onClick={() => {
                setSelectedRegion(region);
                filterByRegion(region);
                setIsOpen(false);
              }}
            >
              {region}
            </SelectList>
          ))}
        </SelectOption>
      ) : null}
    </Container>
  );
};

export default FilterBar;
