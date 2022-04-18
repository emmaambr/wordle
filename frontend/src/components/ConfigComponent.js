import "../css/Config.css"

function ConfigGame({ HandleSubmit, WordLength, setWordLength, Unique, setUnique }) {
    function SubmitSettings(ev) {
        ev.preventDefault();
        HandleSubmit(WordLength, Unique);
    }

    return (
        <div className="config-container">
            <form onSubmit={SubmitSettings} className="config-form">
                <div className="wl-container">
                    <label className="wl-label"> 
                        How many letters?
                        <select
                            className="wl-select"
                            value={WordLength}
                            onChange={(ev) => setWordLength(parseInt(ev.target.value))} >
                            <option value="4"> 4 </option>
                            <option value="5"> 5 </option>
                            <option value="6"> 6 </option>
                        </select>
                    </label>
                </div>

                <div className="u-container">
                    <label className="u-label">
                        <input
                            className="u-input"
                            type="radio"
                            name={Unique}
                            value="true"
                            onChange={(ev) => setUnique(ev.target.value)} />
                        Allow unique characters only
                        <br />
                    </label>
                    <label className="u-label">
                        <input
                            className="u-input"
                            type="radio"
                            name={Unique}
                            value="false"
                            defaultChecked
                            onChange={(ev) => setUnique(ev.target.value)} />
                        Allow repeating characters
                    </label>
                </div>
                <button className="config-btn" type="submit"> Play! </button>
            </form>
        </div>
    );
}

export default ConfigGame; 