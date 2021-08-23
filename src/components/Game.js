import React from "react";
import useGameState from "../hooks/useGameState";
import StarList from "./StarList";
import NumPad from "./NumPad";
import PlayAgain from "./PlayAgain";

export default function Game({ startGame }) {
  const {
    stars,
    available,
    candidates,
    setGameState,
  } = useGameState();

  const gameStatus = available.length === 0
    ? "won"
    : "running";

  const onClickHandler = (number, state) => {
    if (state === "used") {
      return;
    }

    const newCandidates = state === "available"
      ? candidates.concat(number)
      : candidates.filter(n => n !== number);

    setGameState(newCandidates);
  }

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        {gameStatus !== "running"
          ? <PlayAgain gameStatus={gameStatus} onClick={startGame} />
          : <StarList count={stars} />}
        <NumPad available={available} candidates={candidates} stars={stars} onClickHandler={onClickHandler} />
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
}
