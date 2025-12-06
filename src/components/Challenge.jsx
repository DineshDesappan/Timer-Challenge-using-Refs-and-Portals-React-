import React, { useRef, useState } from "react";
import Modal from "./Modal";

const Challenge = ({ title, targetTime }) => {
const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000)
  const timerRef = useRef();
  const modalRef = useRef();
let timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  if(timeRemaining <= 0) {
    clearInterval(timerRef.current);
    modalRef.current.open();
  }
function onReset() {
  setTimeRemaining(targetTime * 1000);
}
  function handleStartChallenge() {
    timerRef.current = setInterval(() => {
      setTimeRemaining(prev => prev - 10);
    }, 10);
  }

  function handleStopChallenge() {
    clearInterval(timerRef.current);
    modalRef.current.open();

  }
  return (
    <>
      <Modal targetTime={targetTime} ref={modalRef} remainingTime={timeRemaining} onReset={onReset}/>

      <section className="challenge">
        <h2>{title}</h2>
        {timeRemaining <= 0 && <p>Challenge Expired</p>}
        <p className="challenge-time">
          Time: {targetTime} Second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button
            onClick={timerIsActive ? handleStopChallenge : handleStartChallenge}
          >
            {timerIsActive ? "Stop Challenge" : "Start Challenge"}
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running" : "Time is not running"}
        </p>
      </section>
    </>
  );
};

export default Challenge;
