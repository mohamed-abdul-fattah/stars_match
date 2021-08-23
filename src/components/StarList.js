import React from "react";
import Star from "./Star";
import {utils} from "../Utils";

export default function StarList({ count }) {
  return (
    <div className="left">
      {utils.range(1, count).map(id => <Star key={id} />)}
    </div>
  );
}
