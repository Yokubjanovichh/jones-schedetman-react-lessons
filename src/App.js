import { useEffect, useReducer } from "react";
import { Header, Main, Loading, Error, Start, Question, TimeBtn, NextBtn, ProgressBar, Finished } from "./components/index";

const SECS_PER_QUESTION = 30;

const initialState = {
  questions: [],

  //"loading", "error","ready", "active", "finished"
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  secondsReamning: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataRicived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailled":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
        secondsReamning: state.questions.length * SECS_PER_QUESTION,
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points: action.payload === question.correctOption ? state.points + question.points : state.points,
      };
    case "newQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "finish":
      return {
        ...state,
        status: "finished",
        highScore: state.points > state.highScore ? state.points : state.highScore,
      };
    case "restartQuiz":
      return {
        ...state,
        questions: state.questions,
        status: "ready",
        index: 0,
        answer: null,
        points: 0,
      };
    case "tick":
      return {
        ...state,
        status: state.secondsReamning === 0 ? "finished" : state.status,
        secondsReamning: state.secondsReamning > 0 && state.secondsReamning - 1,
      };
    default:
      return new Error("Action unkown");
  }
}

export default function App() {
  const [{ questions, status, index, answer, points, highScore, secondsReamning }, dispatch] = useReducer(reducer, initialState);
  const numQuestions = questions?.length;
  const maxPossiblePoints = questions.reduce((prev, cur) => prev + cur.points, 0);
  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRicived", payload: data }))
      .catch(() => dispatch({ type: "dataFailled" }));
  }, []);
  return (
    <div>
      <Header />
      <Main>
        {status === "loading" && <Loading />}
        {status === "error" && <Error />}
        {status === "ready" && <Start dispatch={dispatch} numQuestions={numQuestions} />}
        {status === "active" && (
          <>
            <ProgressBar index={index} points={points} numQuestions={numQuestions} maxPossiblePoints={maxPossiblePoints} answer={answer} />
            <Question question={questions[index]} dispatch={dispatch} answer={answer} />
            <footer style={{ width: "500px", display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "20px" }}>
              <TimeBtn dispatch={dispatch} secondsReamning={secondsReamning} />
              <NextBtn numQuestions={numQuestions} dispatch={dispatch} answer={answer} index={index} />
            </footer>
          </>
        )}
        {status === "finished" && <Finished highScore={highScore} points={points} maxPossiblePoints={maxPossiblePoints} dispatch={dispatch} />}
      </Main>
    </div>
  );
}
