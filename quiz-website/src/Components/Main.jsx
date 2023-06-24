import React, { useState } from "react";
import useSound from "use-sound";
import correct from "../Sounds/correct.mp3";
import wrong from "../Sounds/wrong.mp3";
import play from "../Sounds/play.mp3";
import Timer from "./Timer";
import { useNavigate } from "react-router-dom";

function shuffle(arr) {
  let hashSet = new Set();
  let ans = [];
  let i = 0;

  while (hashSet.size !== 4) {
    const randomNumber = Math.floor(Math.random() * 4);
    if (!hashSet.has(randomNumber)) {
      ans[randomNumber] = arr[i];
      i++;
      hashSet.add(randomNumber);
    }
  }
  return ans;
}

export default function Main({
  question,
  correctOption,
  incorrectOptions,
  setLevel,
  level,
}) {
  // const [timerTime, setTimerTime] = useState(30);
  const [dataToPass, setDataToPass] = useState(level);
  const navigate = useNavigate();
  let tempArr = [...incorrectOptions, correctOption];
  // let optionArr = shuffle(tempArr);
  let optionArr = tempArr;
  const [playCorrectSound, { stop: stopCorrectSound }] = useSound(correct);
  const [playWrongSound, { stop: stopWrongSound }] = useSound(wrong);
  const [playPlaySound, { stop: stopPlaySound }] = useSound(play);

  function checkAnswer(e) {
    let correctAns = e.target.textContent;
    if (correctAns == correctOption) {
      playCorrectSound();
      e.target.style.backgroundColor = "green";
      setTimeout(() => {
        setLevel((prevLevel) => prevLevel + 1);
        e.target.style.backgroundColor = "";
        stopCorrectSound();
      }, 4000);
      // setTimerTime(50);
      // console.log("setTimerTime called");
    } else {
      playWrongSound();
      e.target.style.backgroundColor = "red";
      setTimeout(() => {
        e.target.style.backgroundColor = "";
        // window.location.href = `/end/${level}`;
        // console.log(level);
        navigate("/end", { state: { level } });
        stopWrongSound();
      }, 4000);
      setTimeout(() => {
        setLevel(1);
      }, 5000);
    }
  }

  playPlaySound();
  setTimeout(() => {
    stopPlaySound();
  }, 5000);

  console.log("main component loaded");
  return (
    <div className="main">
      <div className="q-a-box">
        <div className="timer-box">
          {/* <Timer timerTime={timerTime} setTimerTime={setTimerTime} /> */}
        </div>
        <div className="question box-style-1">{question}</div>
        <div className="options">
          <div className="option box-style-1" onClick={checkAnswer}>
            {optionArr[0]}
          </div>
          <div className="option box-style-1" onClick={checkAnswer}>
            {optionArr[1]}
          </div>
          <div className="option box-style-1" onClick={checkAnswer}>
            {optionArr[2]}
          </div>
          <div className="option box-style-1" onClick={checkAnswer}>
            {optionArr[3]}
          </div>
        </div>
      </div>
    </div>
  );
}
