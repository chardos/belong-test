import React, { useState } from 'react';
import produce from 'immer';

import './App.css';
import { Cell, Row } from './App.styled';
import { createBoard } from './utils/createBoard';

function App() {
  const [board, setBoard] = useState(createBoard(6, 4));

  const toggleCell = (rowIndex: number, columnIndex: number) => {
    const nextState = produce(board, (draft) => {
      draft[rowIndex][columnIndex] = !draft[rowIndex][columnIndex];
    });

    setBoard(nextState);
  };

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
