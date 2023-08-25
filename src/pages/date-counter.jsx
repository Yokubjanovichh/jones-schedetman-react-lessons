import React, { useState } from "react"; // React-ni import qilish kerak
import style from "./style.module.scss";

const months = [{ name: "Jan" }, { name: "Feb" }, { name: "Mar" }, { name: "Apr" }, { name: "May" }, { name: "Jun" }, { name: "Jul" }, { name: "Aug" }, { name: "Sep" }, { name: "Oct" }, { name: "Nov" }, { name: "Dec" }];

const weeks = [{ name: "Mon" }, { name: "Tue" }, { name: "Wed" }, { name: "Thur" }, { name: "Fri" }, { name: "Sat" }, { name: "Sun" }];

export default function CounterDate() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [week, setWeek] = useState(3);
  const [month, setMonth] = useState(4);
  const [date, setDate] = useState(27);
  const [year, setYear] = useState(2027);

  const handleMinus = () => {
    const minusNum = count - step;
    setCount(minusNum);

    setWeek((prevWeek) => (prevWeek > 1 ? prevWeek - 1 : 7));

    // new date qilib ochishda yozgan shartkarni uzi quyib tekshirib beradi
    setDate((prevDate) => {
      if (prevDate <= step) {
        const newMonth = month === 1 ? 12 : month - 1;
        const newYear = month === 1 ? year - 1 : year;
        setMonth(newMonth);
        setYear(newYear);
        return prevDate === step ? 30 : 30 - (step - prevDate);
      }
      return prevDate - step;
    });
  };

  const handlePlus = () => {
    const plusNum = count + step;
    setCount(plusNum);

    setWeek((prevWeek) => (prevWeek < 7 ? prevWeek + 1 : 1));

    setDate((prevDate) => {
      if (prevDate + step > 30) {
        const newMonth = month === 12 ? 1 : month + 1;
        const newYear = month === 12 ? year + 1 : year;
        setMonth(newMonth);
        setYear(newYear);
        return prevDate + step - 30;
      }
      return prevDate + step;
    });
  };

  return (
    <div className={style.counter}>
      <div>
        <button onClick={() => setStep((prevStep) => Math.max(prevStep - 1, 1))}>-</button>
        <p>{step}</p>
        <button onClick={() => setStep((prevStep) => prevStep + 1)}>+</button>
      </div>
      <div>
        <button onClick={handleMinus}>-</button>
        <p>{count}</p>
        <button onClick={handlePlus}>+</button>
      </div>
      <p>
        {count !== 0 ? Math.abs(count) : ""} {count !== 0 ? (count < 0 ? "days ago was today" : "days from today") : "Today"} {weeks[week - 1].name} {months[month - 1].name} {date} {year}
      </p>
    </div>
  );
}
