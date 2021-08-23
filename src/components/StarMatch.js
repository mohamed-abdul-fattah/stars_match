import React, {useState} from "react";
import StarList from "./StarList";
import NumPad from "./NumPad";
import {utils} from "../Utils";

const StarMatch = () => {
  const [stars, setStars] = useState(utils.random(1, 9));
  const [available, setAvailable] = useState(utils.range(1, 9));
  const [candidates, setCandidates] = useState([]);

  const setGameState = (newCandidates) => {
    if (utils.sum(newCandidates) !== stars) {
      setCandidates(newCandidates);
    } else {
      const newAvailable = available.filter(n => !newCandidates.includes(n));
      setStars(utils.randomSumIn(newAvailable, 9));
      setAvailable(newAvailable);
      setCandidates([]);
    }
  }

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
        <StarList count={stars} />
        <NumPad available={available} candidates={candidates} stars={stars} onClickHandler={onClickHandler} />
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
};

export default StarMatch;
