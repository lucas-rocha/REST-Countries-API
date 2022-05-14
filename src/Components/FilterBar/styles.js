import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 200px;
  height: 50px;
  margin-top: 2rem;
  background: ${(props) => props.theme.background.secondary};
  color: ${(props) => props.theme.colors.primary};
  box-shadow: ${(props) => props.theme.shadow.primary};
  border-radius: 5px;

  @media (min-width: 700px) {
    margin-top: 0;
  }
`;

export const SelectContainer = styled.div`
  height: 100%;
  margin: 0 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SelectIcons = styled.div`
  cursor: pointer;

  > svg {
    margin-left: 5px;
  }
`;

export const SelectOption = styled.ul`
  width: 200px;
  height: auto;
  margin-top: 5px;
  padding: 1rem;
  background: ${(props) => props.theme.background.secondary};
  box-shadow: ${(props) => props.theme.shadow.primary};
  border-radius: 5px;
`;

export const SelectList = styled.li`
  height: 30px;
  list-style: none;
  line-height: 30px;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
`;
