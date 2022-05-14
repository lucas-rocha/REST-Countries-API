import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { Container, Input, SearchIcon } from './styles';

const SearchBar = () => (
  <Container>
    <SearchIcon>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </SearchIcon>
    <Input type="text" placeholder="Search for a country..." />
  </Container>
);

export default SearchBar;
