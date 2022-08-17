import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    margin-top: 2rem;
    font-weight: bold;
    color: ${(props) => props.theme.text.primary};
  }
`;

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 10px solid ${(props) => props.theme.background.secondary};
  border-top: 10px solid ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  animation: ${animate} 1.5s linear infinite;
`;
