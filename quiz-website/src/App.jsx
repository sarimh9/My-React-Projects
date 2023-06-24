import React from "react";
import { Link } from "react-router-dom";
import Timer from "./Components/Timer";

export default function App() {
  return (
    <>
      <h1>Welcome</h1>
      <Link to="/game">Play Game!</Link>
    </>
  );
}
