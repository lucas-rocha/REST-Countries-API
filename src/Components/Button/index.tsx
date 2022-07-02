import { Container } from './styles';

interface ButtonProps {
  icon?: JSX.Element;
  text?: string;
  handleClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ icon, text, handleClick }) => (
  <Container onClick={handleClick}>
    {icon}
    <span>{text}</span>
  </Container>
);

export default Button;
