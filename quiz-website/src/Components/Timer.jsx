import React, { useState, useEffect } from "react";

export default function Timer({ timerTime, setTimerTime }) {
  let x = timerTime;
  const [count, setCount] = useState(x);
  const [timerEnded, setTimerEnded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimerTime((prevCount) => {
        if (prevCount === 0) {
          clearInterval(interval);
          setTimerEnded(true);
          return 0;
        } else {
          return prevCount - 1;
        }
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={`timer ${timerEnded ? "timer-ended" : ""}`}>
      {timerTime}
    </div>
  );
}
