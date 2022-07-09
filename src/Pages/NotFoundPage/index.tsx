import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';

import Button from '../../Components/Button';

import { Container, SubTitle, Title } from './styles';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <Container>
        <Title>404</Title>
        <SubTitle>
          <span>Page not Found</span>
          <FontAwesomeIcon icon={faTriangleExclamation} size={24} />
        </SubTitle>
        <Button
          icon={<FontAwesomeIcon icon={faHouse} />}
          text="Go to home page"
          handleClick={goToHomePage}
        />
      </Container>
    </div>
  );
};

export default NotFoundPage;
