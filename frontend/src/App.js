import { useState } from "react";
import Navbar from './components/NavComponent'
import Config from './components/ConfigComponent';
import Game from "./pages/Game";
import './css/App.css';

function App() {
  const [gameId, setGameId] = useState(null);
  const [GameState, setGameState] = useState("config");
  const [WordLength, setWordLength] = useState(5);
  const [Unique, setUnique] = useState("false");

  const HandleSubmit = async () => {
    setGameState("playing");

    const res = await fetch("http://localhost:5080/api/games", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Unique: Unique,
        WordLength: WordLength,
      })
    });
    const data = await res.json();
    setGameId(data.id);
  }

  if (GameState === "config") {
    return (
      <div className="App">
        <h1> Wordle </h1>

        <Navbar />
        <Config
          HandleSubmit={HandleSubmit}
          WordLength={WordLength}
          setWordLength={setWordLength}
          Unique={Unique}
          setUnique={setUnique} />

      </div>
    );
  } else if (GameState === "playing") {
    return (
      <div className="App">
        <h1> Wordle </h1>

        <Game
          gameId={gameId}
          WordLength={WordLength} />

      </div>
    );
  }
}

export default App;