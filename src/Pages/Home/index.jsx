import { SearchRow } from './styles';

import SearchBar from '../../Components/SearchBar';
import FilterBar from '../../Components/FilterBar';
import CountryGrid from '../../Components/CountryGrid';

const Home = () => (
  <div className="container">
    <SearchRow>
      <SearchBar />
      <FilterBar />
    </SearchRow>
    <CountryGrid />
  </div>
);

export default Home;
