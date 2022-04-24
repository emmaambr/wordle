import "../css/GuessList.css";

function GuessList({ guesses, WordLength }) {
  const guessElements = guesses.map((guess, i) => {
    return (
      <li key={i} className="box-container">
        {guess.map(({ letter, color }, j) =>
          <span key={j} className={color}> {letter} </span>
        )}
      </li>
    )
  });
  return (
    <ul className="guess-list">
      {guessElements}

      <div className="empty-container">
        {Array.from(new Array(WordLength)).map((_, index) => (
          <span className="empty" key={index} />))}
      </div>

    </ul>
  );
}

export default GuessList;
