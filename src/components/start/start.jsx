import React from "react";
import style from "./style.module.scss";

export default function Start({ numQuestions, dispatch }) {
  return (
    <div className={style.container}>
      <h1>Welcome to The React Quiz</h1>
      <h3>{numQuestions ? numQuestions : 0} questions to test your mastery</h3>
      <button onClick={() => dispatch({ type: "start" })}>Let's start!</button>
    </div>
  );
}
