import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  height: 50px;
  background: ${(props) => props.theme.background.secondary};
  color: ${(props) => props.theme.colors.primary};
  box-shadow: ${(props) => props.theme.shadow.primary};
  border-radius: 5px;

  @media (min-width: 550px) {
    min-width: 400px;
  }
`;

export const SearchIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 4em;
  height: 100%;
`;

export const Input = styled.input`
  height: 100%;
  background-color: transparent;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};

  flex-grow: 1;

  ::placeholder {
    font-weight: 100;
    color: ${(props) => props.theme.colors.primary};
  }
`;
