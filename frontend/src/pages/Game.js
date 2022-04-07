import { useState } from "react";
import Config from "../components/ConfigComponent"
import List from "../components/ListComponent";
import GuessInput from "../components/GuessInputComponent";

function Game() {
  const [GameState, setGameState] = useState("config");

  function handleGameState() {
    setGameState("playing");
  }

  if (GameState === "config") {
    return (
      <div>

        <Config />

      </div>
    );
  } else if (GameState === "playing") {
    return (
      <div>

        <List />
        <GuessInput />

      </div>
    );
  }
}

export default Game;