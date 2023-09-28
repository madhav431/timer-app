import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
const [timer,setTimer] = useState(0);
const [intervalId, setIntervalId] = useState(null);



const startTimer = () => {
  const id = setInterval(() => {
    setTimer((timer) => timer + 1);
  }, 1000);
  setIntervalId(id);
};

const stopTimer = () => {
  if(intervalId!=null){
    clearInterval(intervalId);
      setIntervalId(null);
  }
}

const resetTimer = () => {
  clearInterval(window.myTimer);
  setTimer(0);
}


  return (
    <div className="App">
      <h2>Timer</h2>
      <span>{Math.trunc(timer / 60)} mins </span>
      <span>{timer % 60} secs</span><br/>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}
