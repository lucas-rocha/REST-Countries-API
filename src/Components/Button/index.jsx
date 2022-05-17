import { Container } from './styles';

const Button = ({ icon, text, handleClick }) => (
  <Container onClick={handleClick}>
    {icon}
    <span>{text}</span>
  </Container>
);

export default Button;
