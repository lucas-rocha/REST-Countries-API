import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  gap: 2rem;

  padding: 2rem 0;

  @media (min-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  }
`;
