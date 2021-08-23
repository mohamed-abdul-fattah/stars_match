import React from "react";
import {utils} from "../Utils";
import Button, {NumberState} from "./Button";

export default function NumPad({ available, stars, candidates, onClickHandler }) {
  const numPad = utils.range(1, 9);
  const candidatesAreWrong = utils.sum(candidates) > stars;
  const numberState = number => {
    if (!available.includes(number)) {
      return NumberState.USED;
    } else if (candidates.includes(number)) {
      return candidatesAreWrong ? NumberState.WRONG : NumberState.CANDIDATE;
    } else {
      return NumberState.AVAILABLE;
    }
  };

  return (
    <div className="right">
      {numPad.map((number) => {
        return <Button key={number} state={numberState(number)} number={number} onClickHandler={onClickHandler} />;
      })}
    </div>
  );
}
