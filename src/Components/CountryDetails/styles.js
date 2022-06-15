import styled from 'styled-components';

export const Container = styled.div`
  color: ${(props) => props.theme.text.primary};

  @media (min-width: 700px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 100%;
  border: 10px solid ${(props) => props.theme.background.secondary};
  border-radius: 5px;

  @media (min-width: 700px) {
    width: 50%;
    align-self: flex-start;
  }
`;

export const Details = styled.div`
  margin-top: 2rem;

  @media (min-width: 700px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    width: 50%;
    margin: 0;
    padding-left: 5rem;
  }

  > ul:last-child {
    width: 40%;
  }
`;

export const Title = styled.h1`
  width: 100%;
`;

export const DetailsList = styled.ul`
  list-style: none;
  margin-top: 2rem;

  > li {
    margin-top: 0.5rem;
  }

  @media (min-width: 700px) {
    margin: 0;
    align-self: flex-start;
  }
`;

export const DetailsFooter = styled.div`
  margin-top: 2rem;

  @media (min-width: 700px) {
    margin: 0;
  }
`;

export const DetailsFooterButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;

  margin-top: 0.5rem;

  > button {
    margin-right: 0.5rem;
  }
`;
