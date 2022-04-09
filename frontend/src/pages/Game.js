import { useState } from "react";
import GuessInput from "../components/GuessInputComponent";
import List from "../components/ListComponent";
import "../css/Config.css"

function Game() {
  const [GameState, setGameState] = useState("playing");


  if (GameState === "won") {
    return (
      <div>

        <h1> Congratulations, you're a winner!</h1>

      </div>
    );
  } else if (GameState === "playing") {
    return (
      <div>

        <List />
        <GuessInput />

      </div>

    )
  };
}

export default Game;
