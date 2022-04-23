import { useState } from "react";
import HighscoreInput from "../components/HighscoreInputComponent";

function Highscore({ gameId, result, guesses }) {
    const [Player, setPlayer] = useState("");
    const [GameState, setGameState] = useState("won");
    const [Message, setMessage] = useState("");

    const duration = (new Date(result.endTime) - new Date(result.startTime)) / 1000;
    const setSeconds = Math.trunc(duration);

    async function SubmitHighscore() {
        const regEx = /^[A-Za-z]+$/;

        if (Player.length < 13 && regEx.test(Player)) {
            setGameState("highscore");
            setMessage("");
            setGameState(null);

            await fetch(`http://localhost:5080/api/games/${gameId}/highscore`,
                {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ Player: Player }),
                }
            );

        } else {
            setMessage(" [ Entered name can only contain a maximum of 12 characters from A-Z ] ");
        }
    }

    const correct = guesses.map((guess, i) => {
        return (
            <div key={i} className="box-container">
                {guess.map(({ letter, color }, j) =>
                    <span key={j} className={color}> {letter} </span>
                )}
            </div>
        )
    });

    if (GameState === "won") {
        return (
            <div className="sumbit-hs-container">

                {correct.at(-1)}

                <h3> Congratulations, you won! </h3>
                <p> Number of guesses: {guesses.length} </p>
                <p> Time: {setSeconds} sek</p>

                <HighscoreInput
                    Player={Player}
                    setPlayer={setPlayer}
                    SubmitHighscore={SubmitHighscore} />

                <p className="message"> {Message} </p>

            </div>
        );
    } else {
        return <> </>;
    }
}

export default Highscore;