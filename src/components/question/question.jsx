import React from "react";
import Option from "./option/Option";
import style from "./style.module.scss";

export default function Question({ question, dispatch, answer }) {
  return (
    <div className={style.container}>
      <h2>{question.question}</h2>
      <Option question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}
