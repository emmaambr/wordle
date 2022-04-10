import "../css/Config.css"

function ConfigGame({ HandleSubmit, NumberOfCharacters, setNumberOfCharacters, CharacterType, setCharacterType }) {
    function SubmitSettings(ev) {
        ev.preventDefault();
        HandleSubmit(NumberOfCharacters, CharacterType);
    }

    return (
        <div className="cg-container">
            <form onSubmit={SubmitSettings}>
                <div className="noc-container">
                    <label className="number-of-characters"> 
                        How many letters?
                        <select
                            className="select-noc"
                            value={NumberOfCharacters}
                            onChange={(ev) => setNumberOfCharacters(parseInt(ev.target.value))} >
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
                            value="unique"
                            onChange={(ev) => setCharacterType(ev.target.value)} />
                        Allow unique characters only
                        <br />
                    </label>
                    <label className="character-type">
                        <input
                            className="input-ct"
                            type="radio"
                            name={CharacterType}
                            value="repeating"
                            defaultChecked
                            onChange={(ev) => setCharacterType(ev.target.value)} />
                        Allow repeating characters
                    </label>
                </div>

                <button className="config-btn" type="submit"> Play! </button>
            </form>
        </div>
    );
}

export default ConfigGame; 