import styled from 'styled-components';
const CELL_SIZE = 50;

export const Board = styled.div`
  margin-bottom: 10px;
`;

export const Row = styled.div`
  display: flex;
  margin-bottom: 1px;
`;

export const Cell = styled.div<{ isAlive: boolean }>`
  width: ${CELL_SIZE}px;
  height: ${CELL_SIZE}px;
  background-color: ${(props) => (props.isAlive ? 'black' : '#ccc')};
  margin-right: 1px;
`;
