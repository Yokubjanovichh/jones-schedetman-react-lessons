import React from "react";
import style from "./style.module.scss";

export default function ProgressBar({ index, points, numQuestions, maxPossiblePoints, answer }) {
  const width = Math.floor((500 / 15) * (index + Number(answer !== null)));
  return (
    <div className={style.wrapper}>
      {/* <progress max={numQuestions} value={index + Number(answer !== null)} /> */}
      <div className={style.progressContainer}>
        <div style={{ width: `${width}px` }} className={style.progressItem}></div>
      </div>
      <div className={style.progressInfo}>
        <div className={style.questionCount}>
          <p>
            Question <b>{index + 1}</b> / {numQuestions}
          </p>
        </div>
        <div className={style.questionPoint}>
          <p>
            <b>{points}</b> / {maxPossiblePoints} points
          </p>
        </div>
      </div>
    </div>
  );
}
