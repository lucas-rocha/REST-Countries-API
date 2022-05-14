import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import {
  Container,
  SelectContainer,
  SelectIcons,
  SelectList,
  SelectOption,
} from './styles';

const FilterBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

  return (
    <Container>
      <SelectContainer>
        <span>{selectedRegion || 'Filter by Region'}</span>
        <SelectIcons>
          {selectedRegion ? (
            <FontAwesomeIcon
              icon={faCircleXmark}
              onClick={() => setSelectedRegion(null)}
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
