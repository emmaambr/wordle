import { useEffect, useState } from "react";
import Navbar from './components/NavComponent'
import Config from './components/ConfigComponent';
import Game from "./pages/Game";
import './css/App.css';

function App() {
  const [gameId, setGameId] = useState(null);
  const [GameState, setGameState] = useState("config");
  const [NumberOfCharacters, setNumberOfCharacters] = useState(5);
  const [CharacterType, setCharacterType] = useState("repeating");

  useEffect(() => {
    const startGame = async () => {
      const res = await fetch("http://localhost:5080/api/games", {
        method: "post",
      });
      const data = await res.json();
      setGameId(data.id);
    };
    startGame();
  }, []);

  const HandleSubmit = async () => {
    setGameState("playing");
  }

  if (GameState === "config") {
    return (
      <div className="App">
        <h1> Wordle </h1>

        <Navbar />
        <Config
          HandleSubmit={HandleSubmit}
          NumberOfCharacters={NumberOfCharacters}
          setNumberOfCharacters={setNumberOfCharacters}
          CharacterType={CharacterType}
          setCharacterType={setCharacterType} />
          
      </div>
    );
  } else if (GameState === "playing") {
    return (
      <div className="App">
        <h1> Wordle </h1>

        <Game gameId={gameId} />

      </div>
    );
  }
}

export default App;