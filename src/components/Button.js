import React from "react";
import {colors} from "../Utils";

export const NumberState = {
  AVAILABLE: "available",
  USED: "used",
  WRONG: "wrong",
  CANDIDATE: "candidate",
  isUsed: function (state) {
    return state === this.USED;
  },
  isAvailable: function (state) {
    return state === this.AVAILABLE;
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
