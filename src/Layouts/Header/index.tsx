import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

import { Container, HeaderGroup, SwitchContainer } from './styles';

interface HeaderProps {
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => (
  <Container>
    <HeaderGroup className="container">
      <Link to="/">
        <h3>Where in the World?</h3>
      </Link>
      <SwitchContainer onClick={toggleTheme}>
        <FontAwesomeIcon icon={faMoon} />
        <b>Dark Mode</b>
      </SwitchContainer>
    </HeaderGroup>
  </Container>
);

export default Header;
