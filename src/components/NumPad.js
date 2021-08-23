import React from "react";
import {utils} from "../Utils";
import Button, {STATE} from "./Button";

export default function NumPad({ available, stars, candidates, onClickHandler }) {
  const numPad = utils.range(1, 9);
  const candidatesAreWrong = utils.sum(candidates) > stars;
  const numberState = number => {
    if (!available.includes(number)) {
      return "used";
    } else if (candidates.includes(number)) {
      return candidatesAreWrong ? "wrong" : "candidate";
    } else {
      return "available";
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
