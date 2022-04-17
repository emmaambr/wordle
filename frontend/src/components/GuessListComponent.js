import "../css/GuessList.css";

function GuessList({ guesses }) {
  const guessElements = guesses.map((guess, index) => {

    return <li key={index}> {guess} </li>
  });

  return <ul className="guess-list">{guessElements}</ul>;
}

export default GuessList;
