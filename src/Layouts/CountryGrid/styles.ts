import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  gap: 3rem;

  padding: 2rem 0;

  @media (min-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  }

  > a {
    text-decoration: none;
  }
`;

export const SpinnerContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`;
