import { SearchRow } from './styles';

import SearchBar from '../../Components/SearchBar';
import FilterBar from '../../Components/FilterBar';

const Home = () => (
  <div className="container">
    <SearchRow>
      <SearchBar />
      <FilterBar />
    </SearchRow>
  </div>
);

export default Home;
