import React, { useState } from "react";
import style from "./app.module.scss";

const messages = ["Learn react 🤓", "Apply for jobs 💼", "Invest your new income 🤑"];

export default function App() {
  const [count, setCount] = useState(1);
  const [clear, setClear] = useState(true);

  const handlePrevious = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleNext = () => {
    if (count < messages.length) setCount(count + 1);
  };

  // clear button

  const handleClick = () => {
    setCount(1);
    setClear(!clear);
  };

  return (
    <>
      <button style={{ color: clear ? "" : "red" }} onClick={handleClick} className={style.clearButton}>
        &times;
      </button>
      {clear && (
        <div className={style.steps}>
          <div className={style.numbers}>
            <div className={count >= 1 && style.active}>1</div>
            <div className={count >= 2 && style.active}>2</div>
            <div className={count >= 3 && style.active}>3</div>
          </div>
          <p className={style.message}>
            Step: {count} {messages[count - 1]}
          </p>
          <div className={style.buttons}>
            <button className={style.previous} onClick={handlePrevious}>
              previous
            </button>
            <button className={style.next} onClick={handleNext}>
              next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
