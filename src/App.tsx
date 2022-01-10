import React, { useState } from 'react';
import produce from 'immer';

import './App.css';
import { Board, Cell, Row } from './App.styled';
import { createBoard } from './utils/createBoard';
import { generateNextFrame } from './utils/generateNextFrame';

function App() {
  const [board, setBoard] = useState(createBoard(8, 8));

  const toggleCell = (rowIndex: number, columnIndex: number) => {
    const nextState = produce(board, (draft) => {
      draft[rowIndex][columnIndex] = !draft[rowIndex][columnIndex];
    });

    setBoard(nextState);
  };

  const next = () => {
    const nextFrame = generateNextFrame(board);
    setBoard(nextFrame);
  };

  return (
    <>
      <Board>
        {board.map((row, rowIndex) => {
          return (
            <Row>
              {row.map((cell: boolean, columnIndex: number) => (
                <Cell
                  isAlive={cell}
                  onClick={() => toggleCell(rowIndex, columnIndex)}
                />
              ))}
            </Row>
          );
        })}
      </Board>
      <button onClick={next}>Next</button>
    </>
  );
}

export default App;
