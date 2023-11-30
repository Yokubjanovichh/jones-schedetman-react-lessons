import { React, useReducer } from "react";
import "./main.css";

/*
YO’RIQNOMALAR / HISOBOTLAR:

Oddiy bank hisobini yaratishni ko’rib chiqaylik! Bu meni useReducer ishlayotganini tushuntirish uchun misol sifatida ishlatgan misolimga o’xshash, lekin bu sodda (bu yerda biz hisob raqamlaridan foydalanmaymiz)

Reducer yordamida quyidagi holat o’tkazishlarni model qiling: hisob ochish, depozit qilish, pulni yechib olish, qarz so’roq qilish, qarzni to’lash, hisobni yopish. Boshlanish uchun quyidagi initialState dan foydalaning.

Barcha operatsiyalar (hisob ochishdan tashqari) faol bo’lganda faqat amalga oshirilishi mumkin. Agar bu shunday bo’lmasa, faqat asl holat ob’ektini qaytaring. Buni reducerning boshida tekshirishingiz mumkin

Hisob ochilganda, isActive haqiqiy qiymatga o’zgartiriladi. Shuningdek, hisobni ochish uchun minimal depozit miqdori 500 bo’ladi (bu degani hisob balansi 500 da boshlanadi)

Mijoz faqat qarz yo’q bo’lganda qarz so’roq qilishi mumkin. Agar bu shart bajarilsa, so’ralgan miqdor ‘qarz’ holatida ro’yxatdan o’tkaziladi va u balansga qo’shiladi. Agar shart bajarilmasa, faqat joriy holatni qaytaring

Mijoz qarzni to’laganda, aksincha holat yuz beradi: pul balansdan olinadi, va ‘qarz’ 0 ga qaytariladi. Bu salbiy balanslarga olib kelishi mumkin, lekin bu muammo emas, chunki mijoz endi hisobini yopishi mumkin emas (keyingi punktga qarang)

Mijoz faqat qarz yo’q bo’lganda va balans nol bo’lganda hisobni yopishi mumkin. Agar bu shart bajarilmasa, faqat holatni qaytaring. Agar shart bajarilsa, hisob faolligini yo’qotadi va barcha pul yechib olinadi. Hisob aslida boshlang’ich holatga qaytariladi

o’zbek tiliga tarjima qiling.
*/

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};

function reducer(state, action) {
  if (!state.isActive && action.type !== "isActive") return state;
  switch (action.type) {
    case "isActive":
      return {
        ...state,
        balance: state.balance + 500,
        isActive: true,
      };
    case "deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "loan":
      if (state.loan > 0) return state;
      return {
        ...state,
        balance: state.balance + action.payload,
        loan: action.payload,
      };
    case "payLoan":
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
      };
    case "closeAcc":
      if (state.balance !== 0 || state.loan > 0) return state;
      return initialState;
    default:
      throw new Error("Unknown");
  }
}

export default function App() {
  const [{ balance, loan, isActive }, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      <p>Balance: {balance}</p>
      <p>Loan: {loan}</p>

      <p>
        <button onClick={() => dispatch({ type: "isActive" })} disabled={isActive}>
          Open account
        </button>
      </p>
      <p>
        <button onClick={() => dispatch({ type: "deposit", payload: 150 })} disabled={!isActive}>
          Deposit 150
        </button>
      </p>
      <p>
        <button onClick={() => dispatch({ type: "withdraw", payload: 50 })} disabled={!isActive}>
          Withdraw 50
        </button>
      </p>
      <p>
        <button onClick={() => dispatch({ type: "loan", payload: 5000 })} disabled={!isActive}>
          Request a loan of 5000
        </button>
      </p>
      <p>
        <button onClick={() => dispatch({ type: "payLoan" })} disabled={!isActive}>
          Pay loan
        </button>
      </p>
      <p>
        <button onClick={() => dispatch({ type: "closeAcc" })} disabled={!isActive}>
          Close account
        </button>
      </p>
    </div>
  );
}
