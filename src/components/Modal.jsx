import React, { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ targetTime, ref, remainingTime, onReset }) => {

  let userLost = remainingTime <= 0;
  let formattedTime = (remainingTime / 1000).toFixed(2);
  let score = Math.round((remainingTime / (targetTime * 1000)) * 100);

  const dialog = useRef();

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    },
  }));

  return createPortal(
    
    <dialog onClose={onReset} ref={dialog} className="result-modal">
      {userLost && <h2>Game Over</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <progress value={remainingTime} max={targetTime * 1000} />
      <p>
        The target time was {targetTime} Second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        You completed it in {formattedTime} Second{formattedTime > 1 ? "s" : ""}
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
