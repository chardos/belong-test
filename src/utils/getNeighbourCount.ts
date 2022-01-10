import { Board } from '../types';

export const getNeighbourCount = (
  board: Board,
  rowIndex: number,
  columnIndex: number
) => {
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  return directions.reduce((acc, curr) => {
    const [rowDirection, columnDirection] = curr;
    const isAlive =
      board[rowIndex + rowDirection][columnIndex + columnDirection];

    if (isAlive) {
      return acc + 1;
    }
    return acc;
  }, 0);
};
