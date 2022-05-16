import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { Container } from './styles';

const BackButton = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate('/');

  return (
    <Container onClick={handleClick}>
      <FontAwesomeIcon icon={faArrowLeft} />
      <span>Back</span>
    </Container>
  );
};

export default BackButton;
