import React from "react";
import { Link } from "react-router-dom";
import play from "./Sounds/play.mp3";
import useSound from "use-sound";

export default function App() {
  const [playPlaySound, { stop: stopPlaySound }] = useSound(play);

  return (
    <>
      <h1>Welcome</h1>
      <Link to="/game" onClick={() => playPlaySound()}>
        Play Game!
      </Link>
    </>
  );
}
