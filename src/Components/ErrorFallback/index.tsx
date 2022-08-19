import { Container } from './styles';

const ErrorFallback: React.FC = () => (
  <Container role="alert">
    <p>An error ocurred, try later!</p>
  </Container>
);

export default ErrorFallback;
