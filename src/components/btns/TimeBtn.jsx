import { React, useEffect, useState } from "react";
import style from "./style.module.scss";

export default function TimeBtn({ dispatch, secondsReamning }) {
  const min = Math.floor(secondsReamning / 60);
  const sec = secondsReamning % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className={style.buttonTimer}>
      {min < 10 && "0"}
      {min}:{sec < 10 && "0"}
      {sec}
    </div>
  );
}
