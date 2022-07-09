import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.5rem 2rem;
  border-radius: 5px;
  cursor: pointer;
  background: ${(props) => props.theme.background.secondary};
  color: ${(props) => props.theme.colors.primary};
  box-shadow: ${(props) => props.theme.shadow.primary};

  > svg {
    margin-right: 10px;
  }
`;
