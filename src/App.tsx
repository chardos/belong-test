import React, { useState } from 'react';

import './App.css';
import { Cell, Row } from './App.styled';
import { CellState } from './types';
import { createBoard } from './utils/createBoard';

function App() {
  const [board, setBoard] = useState(createBoard(6, 4));

  return (
    <div className="App">
      {board.map((row) => {
        return (
          <Row>
            {row.map((cell: CellState) => (
              <Cell isAlive={cell === 'alive'} />
            ))}
          </Row>
        );
      })}
    </div>
  );
}

export default App;
