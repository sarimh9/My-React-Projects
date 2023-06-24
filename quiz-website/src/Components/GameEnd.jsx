import React from "react";
import { Link, useLocation } from "react-router-dom";

let reward = {
  1: "1,000",
  2: "2,000",
  3: "3,000",
  4: "5,000",
  5: "10,000",
  6: "20,000",
  7: "40,000",
  8: "80,000",
  9: "1,60,000",
  10: "3,20,000",
  11: "6,40,000",
  12: "12,50,000",
  13: "25.00,000",
  14: "50,00,000",
  15: "75,00,000",
  16: "1 CRORE",
};

export default function GameEnd(props) {
  const location = useLocation();
  const { level } = location.state;

  return (
    <div>
      GameEnd
      <br />
      <h1>You have answered {level - 1} questions. </h1>
      <br />
      <h1>You have won {reward[level - 1] ? reward[level - 1] : "0"} Rupees</h1>
      <br />
      <Link to={"/"}>Start new game</Link>
    </div>
  );
}
