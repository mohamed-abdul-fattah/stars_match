import React from "react";
import StarList from "./StarList";
import NumPad from "./NumPad";

const StarMatch = () => {
  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <StarList />
        <NumPad />
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
};

export default StarMatch;
