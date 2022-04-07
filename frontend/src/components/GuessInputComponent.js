import { useState } from "react";
import "../css/GuessInput.css"

function GuessInput() {
  const [inputWord, setInputWord] = useState("");

  const handleSubmit = async (keyCode) => {
    if (keyCode === "Enter") {
      setInputWord("");
    }
  };

  return (
    <div className="input-container">

      <form className="submit-form" onSubmit={handleSubmit}>
          <input className="guess-input"
            placeholder="Enter guess here"
            value={inputWord}
            onChange={(ev) => setInputWord(ev.target.value)} />

          <button className="input-btn" type="submit"> Submit </button>
      </form>

    </div>
  );
}

export default GuessInput;