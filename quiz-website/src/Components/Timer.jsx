import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Timer({ timerTime = 30, level }) {
  const [timerEnded, setTimerEnded] = useState(false);
  const [count, setCount] = useState(timerTime);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 0) {
          setTimerEnded(true);
          navigate("/end", { state: { level } });
          clearInterval(interval);
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timerTime]);

  useEffect(() => {
    setCount(timerTime);
  }, [timerTime]);

  return (
    <div className={`timer ${timerEnded ? "timer-ended" : ""}`}>{count}</div>
  );
}
