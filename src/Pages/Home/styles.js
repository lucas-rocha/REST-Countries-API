import styled from 'styled-components';

export const SearchRow = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 2rem;

  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
