import BackButton from '../../Components/BackButton';
import CountryDetails from '../../Components/CountryDetails';

import { Container } from './styles';

const CountryDetail: React.FC = () => (
  <div className="container">
    <Container>
      <BackButton />
      <div>
        <CountryDetails />
      </div>
    </Container>
  </div>
);

export default CountryDetail;
