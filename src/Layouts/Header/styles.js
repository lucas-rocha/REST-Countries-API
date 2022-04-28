import styled from 'styled-components';

export const Container = styled.header`
  width: 100vw;
  background-color: #fff;
  box-shadow: 0px -8px 12px var(--dark-gray);

  @media (max-width: 1440px) {
    padding: 0 2rem;
  }
`;

export const HeaderGroup = styled.div`
  max-width: 1440px;
  min-height: 60px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;

  b {
    font-size: 12px;
    margin-left: 0.5rem;
  }
`;
