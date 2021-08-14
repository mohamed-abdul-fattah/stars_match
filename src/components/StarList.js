import React from "react";
import {utils} from "../Utils";
import Star from "./Star";

export default function StarList() {
  const starsCount = utils.random(1, 9);
  const stars = utils.range(1, starsCount);

  return (
    <div className="left">
      {stars.map((id) => <Star key={id} />)}
    </div>
  );
}
