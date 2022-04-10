import "../css/GuessInput.css"

function GuessInput({ SubmitGuess, InputWord, setInputWord }) {
  function handleSubmitGuess(ev) {
    ev.preventDefault();
    SubmitGuess(InputWord);
  }

  return (
    <div className="input-container">

      <form className="submit-form" onSubmit={handleSubmitGuess}>
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