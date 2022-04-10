import { useState } from "react";
import "../css/GuessInput.css"

function GuessInput({ HandleSubmitGuess }) {
  const [InputWord, setInputWord] = useState("");

  function SubmitGuess(ev) {
    ev.preventDefault();
    HandleSubmitGuess( InputWord );
  }

    return (
      <div className="input-container">

        <form className="submit-form" onSubmit={ SubmitGuess }>
          <input className="guess-input"
            placeholder="Enter guess here"
            value={InputWord}
            onChange={(ev) => setInputWord(ev.target.value)} />

          <button className="input-btn" type="submit"> Submit </button>
        </form>

      </div>
    );
  }

  export default GuessInput;