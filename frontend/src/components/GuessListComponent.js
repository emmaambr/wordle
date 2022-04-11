import "../css/GuessList.css";

function GuessList({ guesses }) {
  const guessElements = guesses.map((guess, index) => {

    return <li key={index}> {guess} </li>
  });

  return <ul>{guessElements}</ul>;
}

export default GuessList;
