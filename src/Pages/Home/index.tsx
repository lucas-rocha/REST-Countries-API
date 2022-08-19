import { ErrorBoundary } from 'react-error-boundary';
import { SearchRow } from './styles';

import SearchBar from '../../Components/SearchBar';
import FilterBar from '../../Components/FilterBar';
import CountryGrid from '../../Components/CountryGrid';
import ErrorFallback from '../../Components/ErrorFallback';

const Home: React.FC = () => (
  <div className="container">
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <SearchRow>
        <SearchBar />
        <FilterBar />
      </SearchRow>
      <CountryGrid />
    </ErrorBoundary>
  </div>
);

export default Home;
