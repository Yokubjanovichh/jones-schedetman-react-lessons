import React from "react";
import style from "./style.module.scss";

export default function NextBtn({ dispatch, index, answer, numQuestions }) {
  if (answer === null) return null;
  if (index < numQuestions - 1) {
    return (
      <button onClick={() => dispatch({ type: "newQuestion" })} className={style.button}>
        NextBtn
      </button>
    );
  }
  if (index === numQuestions - 1) {
    return (
      <button onClick={() => dispatch({ type: "finish" })} className={style.button}>
        Finish
      </button>
    );
  }
}
