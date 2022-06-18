import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100% - 70px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > button {
    margin-top: 2rem;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  font-size: 72px;
`;

export const SubTitle = styled.div`
  color: ${(props) => props.theme.colors.primary};

  > span {
    margin-right: 5px;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 600;
  }
`;
