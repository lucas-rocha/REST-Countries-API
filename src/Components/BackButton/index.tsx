import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import Button from '../Button';

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate(-1);

  return (
    <Button
      icon={<FontAwesomeIcon icon={faArrowLeft} />}
      text="Back"
      handleClick={handleClick}
    />
  );
};
export default BackButton;
