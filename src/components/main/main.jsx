import React from "react";
import style from "./style.module.scss";

export default function Main({ children }) {
  return <main className={style.container}>{children}</main>;
}
