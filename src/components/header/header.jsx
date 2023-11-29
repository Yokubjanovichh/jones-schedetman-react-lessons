import React from "react";
import style from "./style.module.scss";
import ReactLogo from "../../logo512.png";

export default function Header() {
  return (
    <header className={style.header}>
      <img width="150px" height="150px" src={ReactLogo} alt="ReactLogoa" />
      <h1 className={style.header_h1}>The React Quiz</h1>
    </header>
  );
}
