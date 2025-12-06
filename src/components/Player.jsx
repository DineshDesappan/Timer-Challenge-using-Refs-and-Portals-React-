import { useRef, useState } from "react";
import Modal from "./Modal";

export default function Player() {
  const [playername, setPlayerName] = useState("");
  const nameRef = useRef();

  function submitHandler() {
    setPlayerName(nameRef.current.value)
  }
  return (
    <>
    <section id="player">
      <h2>Welcome {playername ? playername:"unknown"}</h2>
      <p>
        <input type="text" ref={nameRef} />
        <button onClick={submitHandler}>Set Name</button>
      </p>
    </section>
    </>
  );
}
