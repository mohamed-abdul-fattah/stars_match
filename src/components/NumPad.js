import React from "react";
import {utils} from "../Utils";
import Button from "./Button";

export default function NumPad() {
  const numPad = utils.range(1, 9);

  return (
    <div className="right">
      {numPad.map((number) => <Button key={number} number={number} />)}
    </div>
  );
}
