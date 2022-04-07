import "../css/Config.css"
import { useState } from "react"

function ConfigGame() {
    const [NumberOfCharacters, setNumberOfCharacters] = useState({ value: "5" });
    const [CharacterType, setCharacterType] = useState({ value: "Repeating characters" });
    const [GameState, setGameState] = useState("config");

    function handleNumbersOfCharacters(ev) {
        setNumberOfCharacters({ value: ev.target.value });
    }

    function handleUniqueCharacters(ev) {
        setCharacterType({ value: ev.target.value });
    }

    function handleRepeatingCharacters(ev) {
        setCharacterType({ value: ev.target.value });
    }

    function handleSubmit(ev) {
        ev.preventDefault();
        setGameState("playing");

    }

    if (GameState === "config") {
        return (
            <div className="cg-container">
                <form onSubmit={handleSubmit}>
                    <div className="noc-container">
                        <label className="number-of-characters"> How many letters?
                            <select className="select-noc" value={NumberOfCharacters.value} onChange={handleNumbersOfCharacters}>
                                <option value="4"> Play with 4-letter words </option>
                                <option value="5"> Play with 5-letter words </option>
                                <option value="6"> Play with 6-letter words </option>
                            </select>
                        </label>
                    </div>

                    <div className="ct-container">
                        <label className="character-type">
                            <input
                                className="input-ct"
                                type="radio"
                                name={CharacterType}
                                value="Unique characters"
                                onChange={handleUniqueCharacters} /> Allow unique characters only
                            <br />
                        </label>
                        <label className="character-type">
                            <input
                                className="input-ct"
                                type="radio"
                                name={CharacterType}
                                value="Repeating characters"
                                defaultChecked
                                onChange={handleRepeatingCharacters} /> Allow repeating characters
                        </label>
                    </div>

                    <button className="config-btn" type="submit"> Play! </button>
                </form>
            </div>
        );
    }
}

export default ConfigGame; 