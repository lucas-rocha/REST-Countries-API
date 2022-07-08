import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import useCountries from '../../Utils/Hooks/useCountries';
import { searchCountryByRegion } from '../../Utils/filterCountries';

import {
  Container,
  SelectContainer,
  SelectIcons,
  SelectList,
  SelectOption,
} from './styles';

const FilterBar: React.FC = () => {
  const { setCountries } = useCountries();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('');
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  const filterByRegion = (region: string) => {
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
                setSelectedRegion('');
                filterByRegion('');
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
