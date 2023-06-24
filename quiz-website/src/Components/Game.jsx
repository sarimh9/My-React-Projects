import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";

let data = {
  response_code: 0,
  results: [
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "easy",
      question:
        "What machine element is located in the center of fidget spinners?",
      correct_answer: "Bearings",
      incorrect_answers: ["Axles", "Gears", "Belts"],
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which best selling toy of 1983 caused hysteria, resulting in riots breaking out in stores?",
      correct_answer: "Cabbage Patch Kids",
      incorrect_answers: ["Transformers", "Care Bears", "Rubik's Cube"],
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "easy",
      question: "What alcoholic drink is made from molasses?",
      correct_answer: "Rum",
      incorrect_answers: ["Gin", "Vodka", "Whisky"],
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "easy",
      question: "Which American president appears on a one dollar bill?",
      correct_answer: "George Washington",
      incorrect_answers: [
        "Thomas Jefferson",
        "Abraham Lincoln",
        "Benjamin Franklin",
      ],
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "easy",
      question: "What is the name of the Jewish New Year?",
      correct_answer: "Rosh Hashanah",
      incorrect_answers: ["Elul", "New Year", "Succoss"],
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "easy",
      question: "Which one of the following rhythm games was made by Harmonix?",
      correct_answer: "Rock Band",
      incorrect_answers: [
        "Meat Beat Mania",
        "Guitar Hero Live",
        "Dance Dance Revolution",
      ],
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "easy",
      question: "What is the French word for &quot;hat&quot;?",
      correct_answer: "Chapeau",
      incorrect_answers: ["Bonnet", " &Eacute;charpe", " Casque"],
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which American-owned brewery led the country in sales by volume in 2015?",
      correct_answer: "D. G. Yuengling and Son, Inc",
      incorrect_answers: [
        "Anheuser Busch",
        "Boston Beer Company",
        "Miller Coors",
      ],
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "easy",
      question: "How tall is the Burj Khalifa?",
      correct_answer: "2,722 ft",
      incorrect_answers: ["2,717 ft", "2,546 ft", "3,024 ft"],
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "easy",
      question:
        "What machine element is located in the center of fidget spinners?",
      correct_answer: "Bearings",
      incorrect_answers: ["Axles", "Gears", "Belts"],
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "easy",
      question: "What company developed the vocaloid Hatsune Miku?",
      correct_answer: "Crypton Future Media",
      incorrect_answers: ["Sega", "Sony", "Yamaha Corporation"],
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "easy",
      question: "In which fast food chain can you order a Jamocha Shake?",
      correct_answer: "Arby&#039;s",
      incorrect_answers: ["McDonald&#039;s", "Burger King", "Wendy&#039;s"],
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "easy",
      question: "What nuts are used in the production of marzipan?",
      correct_answer: "Almonds",
      incorrect_answers: ["Peanuts", "Walnuts", "Pistachios"],
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "easy",
      question: "Earth is located in which galaxy?",
      correct_answer: "The Milky Way Galaxy",
      incorrect_answers: [
        "The Mars Galaxy",
        "The Galaxy Note",
        "The Black Hole",
      ],
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "easy",
      question:
        "What kind of aircraft was developed by Igor Sikorsky in the United States in 1942?",
      correct_answer: "Helicopter",
      incorrect_answers: ["Stealth Blimp", "Jet", "Space Capsule"],
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "easy",
      question: "Waluigi&#039;s first appearance was in what game?",
      correct_answer: "Mario Tennis 64 (N64)",
      incorrect_answers: [
        "Wario Land: Super Mario Land 3",
        "Mario Party (N64)",
        "Super Smash Bros. Ultimate",
      ],
    },
  ],
};

export default function Game() {
  const [level, setLevel] = useState(1);

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
