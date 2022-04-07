import './css/App.css';
import Navbar from './components/NavComponent'
import Game from './pages/Game';

function App() { 

  return (
    <div className="App">
      <div className="container">
        <h1>Wordle</h1>
        
        <Navbar />
        <Game />
        
      </div>
    </div>
  );
}

export default App;