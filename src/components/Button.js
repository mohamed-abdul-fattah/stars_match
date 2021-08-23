import React from "react";
import {colors} from "../Utils";

export const STATE = {
  AVAILABLE: "available",
  USED: "used",
  WRONG: "wrong",
  CANDIDATE: "candidate",
  isUsed: function (state) {
    return state === this.USED;
  },
  isCandidate: function (state) {
    return state === this.CANDIDATE;
  },
  isAvailable: function (state) {
    return state === this.AVAILABLE;
  },
  isWrong: function (state) {
    return state === this.WRONG;
  },
};

export default function Button({ number, state, onClickHandler }) {
  return (
    <button className="number"
            style={{backgroundColor: colors[state]}}
            onClick={() => onClickHandler(number, state)} >
      {number}
    </button>
  );
}
