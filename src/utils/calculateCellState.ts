import { Board } from '../types';
import { getNeighbourCount } from './getNeighbourCount';

export const calculateCellState = (
  board: Board,
  rowIndex: number,
  columnIndex: number
) => {
  const isAlive = board[rowIndex][columnIndex];
  const neighbourCount = getNeighbourCount(board, rowIndex, columnIndex);
  if (isAlive && (neighbourCount === 2 || neighbourCount === 3)) {
    return true;
  }
  if (!isAlive && neighbourCount === 3) {
    return true;
  }
  return false;
};
