import { Board } from '../types';

export const createBoard = (width: number, height: number): Board => {
  const columns = Array(height).fill(null);
  return columns.map((column) => Array(width).fill(false));
};
