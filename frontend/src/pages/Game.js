import { useState } from "react";
import GuessInput from "../components/GuessInputComponent";
import GuessList from "../components/GuessListComponent";
import "../css/Config.css"

function Game({ gameId }) {
  const [GameState, setGameState] = useState("playing");
  const [InputWord, setInputWord] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [result, setResult] = useState(null);

  async function SubmitGuess() {
    setGuesses([...guesses]);

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

    if (data.correct) {
      setResult(data.result);
      setGameState("won");
    }

    setGuesses(data.guesses);
    setInputWord("");
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

        <GuessList guesses={guesses} />

        <GuessInput
          SubmitGuess={SubmitGuess}
          InputWord={InputWord}
          setInputWord={setInputWord} />

      </div>

    )
  };
}

export default Game;
