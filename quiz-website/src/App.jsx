import React from "react";
import { Link } from "react-router-dom";
import play from "./Sounds/play.mp3";
import useSound from "use-sound";

export default function App() {
  const [playPlaySound, { stop: stopPlaySound }] = useSound(play);

  function playSound() {
    playPlaySound();
    setTimeout(() => {
      stopPlaySound();
    }, 4000);
  }

  return (
    <div className="home">
      <h1>Welcome</h1>
      <div className="game-link">
        <Link to="/game" onClick={playSound}>
          Play Game!
        </Link>
      </div>
    </div>
  );
}
