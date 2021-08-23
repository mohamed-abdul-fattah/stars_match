import React from "react";

export default function PlayAgain({ gameStatus, onClick }) {
  return (
    <div className="left">
      <div className="game-done">
        <div
          className="message"
          style={{ color: gameStatus === 'lost' ? 'red' : 'green'}}
        >
          {gameStatus === 'lost' ? 'Game Over' : 'Nice'}
        </div>
        <button onClick={onClick}>Play Again</button>
      </div>
    </div>
  );
}
