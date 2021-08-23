import React from "react";
import {GameState} from "./Game";

export default function PlayAgain({ gameStatus, onClick }) {
  return (
    <div className="left">
      <div className="game-done">
        <div
          className="message"
          style={{ color: GameState.isLost(gameStatus) ? 'red' : 'green'}}
        >
          {GameState.isLost(gameStatus) ? 'Game Over' : 'Nice'}
        </div>
        <button onClick={onClick}>Play Again</button>
      </div>
    </div>
  );
}
