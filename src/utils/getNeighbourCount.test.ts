import { createBoard } from './createBoard';
import { getNeighbourCount } from './getNeighbourCount';

describe('getNeighbourCount', () => {
  describe('Given a board, a rowIndex and a columnIndex', () => {
    describe('should count the number of live cells adjacent to that position', () => {
      it('Scenario 1', () => {
        const board = createBoard(3, 3);
        board[0][0] = true;
        board[0][1] = true;
        board[0][2] = true;
        const result = getNeighbourCount(board, 1, 1);
        expect(result).toEqual(3);
      });

      it('Scenario 2', () => {
        const board = createBoard(3, 3);
        board[2][2] = true;
        board[1][2] = true;
        const result = getNeighbourCount(board, 1, 1);
        expect(result).toEqual(2);
      });

      it('Scenario 3', () => {
        const board = createBoard(3, 3);
        board[1][0] = true;
        board[2][0] = true;
        const result = getNeighbourCount(board, 1, 1);
        expect(result).toEqual(2);
      });

      it('Scenario 4', () => {
        const board = createBoard(5, 5);
        board[2][1] = true;
        board[3][1] = true;
        board[4][2] = true;
        const result = getNeighbourCount(board, 1, 1);
        expect(result).toEqual(1);
      });
    });
  });
});
