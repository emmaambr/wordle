import "../css/HighscoreInput.css"

function HighscoreInput({ SubmitHighscore, Player, setPlayer }) {
    function handleSubmitHighscore(ev) {
        ev.preventDefault();
        SubmitHighscore(Player);
    }

    return (
        <div className="hs-input-container">
            <form onSubmit={handleSubmitHighscore}>
                <input className="hs-input"
                    placeholder="Enter name"
                    value={Player}
                    onChange={(ev) => setPlayer(ev.target.value)} />

                <button className="input-btn" type="submit"> Submit highscore </button>
            </form>
        </div>
    );
}

export default HighscoreInput;