import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/commonStyles.css';
import { spices } from './utils/gameData';
import Scoreboard from './components/Scoreboard';
import Gameboard from './components/Gameboard';
import { shuffleArray } from './utils/helperFunctions';

function App() {
  const [currScore, setCurrScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cardData, setCardData] = useState(shuffleArray(spices));
  const [clickHistory, setClickHistory] = useState([]);
  const modal = document.querySelector('#endModal');
  console.log('App load');

  useEffect(() => {
    console.log('set high score');
    setHighScore(Math.max(currScore, highScore));
    if (currScore === 12) {
      modal.style.display = 'flex';
    }
  }, [currScore]);

  function resetGame() {
    setCurrScore(0);
    setClickHistory([]);
  }
  function restartGame() {
    resetGame();
    modal.style.display = 'none';
  }

  function handleUserClick(event) {
    const id = event.target.closest('.card__container').id;
    if (clickHistory.includes(id)) {
      resetGame();
    } else {
      setClickHistory([...clickHistory, id]);
      setCurrScore(currScore + 1);
    }
    setCardData(shuffleArray(cardData));
  }

  window.addEventListener('click', function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });

  return (
    <div id="app">
      <div id="endModal" className="modal">
        <div className="modal-content">
          <p>Great Job! You got all of them 👏</p>
          <button onClick={restartGame}>Play Again?</button>
        </div>
      </div>
      <Header />
      <div className="instructions">
        <span className="bold">Instructions:</span> Try clicking on all
        SpiceCards only once!
      </div>
      <Scoreboard currScore={currScore} highScore={highScore} />
      <Gameboard cardData={cardData} handleUserClick={handleUserClick} />
      <Footer />
    </div>
  );
}

export default App;
