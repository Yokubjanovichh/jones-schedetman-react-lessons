import React from "react";
import style from "../style.module.scss";

export default function Option({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div className={style.container_buttons}>
      {question.options.map((option, index) => (
        <button className={`${index === answer ? style.answer : ""} ${hasAnswered ? (index === question.correctOption ? style.correct : style.wrong) : ""}`} disabled={hasAnswered} onClick={() => dispatch({ type: "newAnswer", payload: index })} key={index}>
          {option}
        </button>
      ))}
    </div>
  );
}
