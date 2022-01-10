import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
`;

export const Cell = styled.div<{ isAlive: boolean }>`
  width: 50px;
  height: 50px;
  background-color: ${(props) => (props.isAlive ? 'black' : '#ccc')};
`;
