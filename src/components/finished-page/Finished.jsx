import React from "react";
import style from "./style.module.scss";

export default function Finished({ maxPossiblePoints, points, highScore, dispatch }) {
  const percentage = Math.ceil((points / maxPossiblePoints) * 100);

  let imoji;
  if (percentage === 100) imoji = "🥇";
  if (percentage >= 80 && percentage < 100) imoji = "🎉";
  if (percentage >= 50 && percentage < 80) imoji = "🙃";
  if (percentage > 0 && percentage < 50) imoji = "🤔";
  if (percentage === 0) imoji = "🤦‍♂️";

  return (
    <div style={{ margin: "40px 0px", display: "flex", flexDirection: "column", rowGap: "20px" }}>
      <p className={style.result}>
        <span> {imoji}</span> You scored <b style={{ margin: "0px 10px" }}>{points}</b> out of {maxPossiblePoints} ({percentage}%)
      </p>
      <p style={{ color: "#fff", fontFamily: "sans", fontSize: "22px", width: "100%", textAlign: "center", letterSpacing: "1px" }}>(HighScore: {highScore} points)</p>
      <button onClick={() => dispatch({ type: "restartQuiz" })} className={style.button}>
        Restart quiz
      </button>
    </div>
  );
}
