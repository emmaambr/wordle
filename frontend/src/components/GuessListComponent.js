import "../css/GuessList.css";

function GuessList({ guesses }) {
  console.log(guesses);

  const guessElements = guesses.map((guess, i) => {
    return (
      <li key={i}>
        {guess.map(({ letter, color }, j) =>
          <span key={j} className={color}> {letter} </span>
        )}
      </li>
    )
  });
  return <ul className="guess-list">{guessElements}</ul>;
}

export default GuessList;
