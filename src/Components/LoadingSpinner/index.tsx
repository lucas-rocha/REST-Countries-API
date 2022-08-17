import { Container, Spinner } from './styles';

interface LoadingSpinnerProps {
  message: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ message }) => {
  return (
    <Container>
      <Spinner />
      <p>{message}</p>
    </Container>
  );
};

export default LoadingSpinner;
