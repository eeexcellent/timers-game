import { useRef, useState } from "react";

export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  function handleSumbit() {
    if(playerName.current.value !== "") {
      setEnteredPlayerName(playerName.current.value);
      
      playerName.current.value = "";
    }
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "..."}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleSumbit}>Set Name</button>
      </p>
    </section>
  );
}
