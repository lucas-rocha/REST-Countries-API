import styled from 'styled-components';

export const Container = styled.header`
  width: 100vw;
  background-color: ${(props) => props.theme.background.secondary};
  color: ${(props) => props.theme.colors.primary};
  box-shadow: ${(props) => props.theme.shadow.primary};
`;

export const HeaderGroup = styled.div`
  min-height: 70px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > a {
    text-decoration: none;
    color: inherit;
  }
`;

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  b {
    font-size: 12px;
    margin-left: 0.5rem;
  }
`;
