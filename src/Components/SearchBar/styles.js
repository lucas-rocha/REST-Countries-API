import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  max-width: 600px;
  height: 50px;
  background: var(--white);
  color: var(--dark-gray);
  box-shadow: 0px 0px 4px hsl(0deg 0% 52% / 26%);
  border-radius: 5px;
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

  flex-grow: 1;

  ::placeholder {
    font-weight: 600;
  }
`;
