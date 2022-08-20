import { ErrorBoundary } from 'react-error-boundary';
import BackButton from '../../Components/BackButton';
import CountryDetails from '../../Components/CountryDetails';
import ErrorFallback from '../../Components/ErrorFallback';

import { Container } from './styles';

const CountryDetail: React.FC = () => (
  <div className="container">
    <Container>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <BackButton />
        <div>
          <CountryDetails />
        </div>
      </ErrorBoundary>
    </Container>
  </div>
);

export default CountryDetail;
