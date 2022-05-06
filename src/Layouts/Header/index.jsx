import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

import { Container, HeaderGroup, SwitchContainer } from './styles';

const Header = () => (
  <Container>
    <HeaderGroup className="container">
      <h3>Where in the World?</h3>
      <SwitchContainer>
        <FontAwesomeIcon icon={faMoon} />
        <b>Dark Mode</b>
      </SwitchContainer>
    </HeaderGroup>
  </Container>
);

export default Header;
