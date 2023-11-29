import React from "react";
import style from "./style.module.scss";

export default function Error() {
  return (
    <div className={style.errorContainer}>
      <p>
        <span>✨</span>
        There was an error fetching questions.
      </p>
    </div>
  );
}
