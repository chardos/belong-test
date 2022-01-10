import { createBoard } from "./createBoard";

describe('createBoard', () => {
  describe('When given a width of 6 and a height 4', () => {
    it('should have 4 rows and 6 columns', () => {
      const board = createBoard(6, 4);
      expect(board.length).toBe(4);
      expect(board.every(row => row.length === 6)).toBe(true)
    });
  });
  
  describe('When given a width of 3 and a height 9', () => {
    it('should have 9 rows and 3 columns', () => {
      const board = createBoard(3, 9);
      expect(board.length).toBe(9);
      expect(board.every(row => row.length === 3)).toBe(true)
    });
  });
});