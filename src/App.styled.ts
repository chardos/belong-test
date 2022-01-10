import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
`;

export const Cell = styled.div<{ isAlive: boolean }>`
  width: 20px;
  height: 20px;
  background-color: ${(props) => (props.isAlive ? 'green' : 'red')};
`;
