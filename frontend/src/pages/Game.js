import { useState } from "react";
import GuessInput from "../components/GuessInputComponent";
import List from "../components/ListComponent";
import "../css/Config.css"

function Game(gameId) {
  const [GameState, setGameState] = useState("playing");
  const [InputWord, setInputWord] = useState("");
  const [Guesses, setGuesses] = useState("")

  async function HandleSubmitGuess(keyCode) {
    if (keyCode === "Enter") {
      setInputWord("");
    }

    const res = await fetch(
      `http://localhost:5080/api/games/${gameId}/guesses`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ guess: InputWord }),
      }
    );
    const data = await res.json();
    setGuesses(data.Guesses);
    setGameState("playing");
  }

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
        <GuessInput HandleSubmitGuess={HandleSubmitGuess} />

      </div>

    )
  };
}

export default Game;
