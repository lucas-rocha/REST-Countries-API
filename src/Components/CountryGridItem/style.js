import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background: ${(props) => props.theme.background.secondary};
  box-shadow: ${(props) => props.theme.shadow.primary};
`;

export const Image = styled.img`
  width: 100%;
  max-width: 100%;
`;

export const InfoBody = styled.div`
  padding: 1rem;
  color: ${(props) => props.theme.text.primary};
`;

export const Title = styled.h1`
  font-size: 1.5rem;
`;

export const InfoList = styled.ul`
  margin: 1rem 0;
  list-style: none;
`;

export const InfoListItem = styled.li`
  margin: 5px 0;
`;
