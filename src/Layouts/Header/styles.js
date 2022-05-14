import styled from 'styled-components';

export const Container = styled.header`
  width: 100vw;
  background-color: #fff;
  box-shadow: 0px -8px 12px var(--dark-gray);
`;

export const HeaderGroup = styled.div`
  min-height: 70px;

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
