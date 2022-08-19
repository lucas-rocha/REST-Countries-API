import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 70px);

  text-align: center;
  margin-top: 2rem;

  font-weight: 600;

  color: ${(props) => props.theme.colors.primary};
`;
