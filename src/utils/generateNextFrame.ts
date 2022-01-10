import produce from 'immer';
import { Board } from '../types';
import { calculateCellState } from './calculateCellState';

export const generateNextFrame = (board: Board) => {
  const nextState = produce(board, (draft) => {
    board.forEach((row, rowIndex) => {
      row.forEach((_, columnIndex) => {
        draft[rowIndex][columnIndex] = calculateCellState(
          board,
          rowIndex,
          columnIndex
        );
      });
    });
  });

  return nextState;
};
