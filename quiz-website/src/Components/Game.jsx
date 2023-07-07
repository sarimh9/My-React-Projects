import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import AtomicSpinner from "atomic-spinner";

const API_URL = `https://opentdb.com/api.php?amount=15&category=18&difficulty=easy&type=multiple`;

export default function Game() {
  const [level, setLevel] = useState(1);
  const [data, setData] = useState(null);

  useEffect(() => {
    fillData();
  }, []);

  async function fillData() {
    const response = await fetch(API_URL);
    console.count("API CALLED");
    const parsedData = await response.json();
    setTimeout(() => {
      setData(parsedData);
    }, 3000);
  }
  console.count("Game component loaded - Main,Sidebar");
  if (data == null) {
    return (
      <div className="spinner">
        <AtomicSpinner electronPathColor="#ffffff" />
      </div>
    );
  }
  console.log(data.results);
  console.log(data.results[level - 1]);
  return (
    <div className="app">
      <Main
        question={data.results[level - 1].question}
        correctOption={data.results[level - 1].correct_answer}
        incorrectOptions={data.results[level - 1].incorrect_answers}
        setLevel={setLevel}
        level={level}
      />
      <Sidebar level={level} />
    </div>
  );
}
