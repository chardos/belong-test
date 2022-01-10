import { createBoard } from './createBoard';
import { calculateCellState } from './calculateCellState';

describe('calculateCellState', () => {
  describe('When a cell is dead', () => {
    describe('and it has exactly 3 neighbours', () => {
      it('Then it should become a live cell', () => {
        const board = createBoard(3, 3);
        board[0][0] = true;
        board[0][1] = true;
        board[0][2] = true;
        const isAlive = calculateCellState(board, 1, 1);
        expect(isAlive).toEqual(true);
      });
    });

    describe('and it has only 2 neighbours', () => {
      it('Then it should remain a dead cell', () => {
        const board = createBoard(3, 3);
        board[1][0] = true;
        board[0][2] = true;
        const isAlive = calculateCellState(board, 1, 1);
        expect(isAlive).toEqual(false);
      });
    });

    describe('and it has more than 3 neighbours', () => {
      it('Then it should remain a dead cell', () => {
        const board = createBoard(3, 3);
        board[0][0] = true;
        board[0][1] = true;
        board[2][0] = true;
        board[2][1] = true;
        const isAlive = calculateCellState(board, 1, 1);
        expect(isAlive).toEqual(false);
      });
    });
  });
});
