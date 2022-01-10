export const createBoard = (width: number, height: number) => {
  const columns = Array(height);
  return columns.fill(Array(width).fill('dead'));
};
