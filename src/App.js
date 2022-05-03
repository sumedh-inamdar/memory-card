import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/commonStyles.css';
import { spices } from './utils/gameData';
import Scoreboard from './components/Scoreboard';
import Gameboard from './components/Gameboard';
import { useCardData } from './utils/helperFunctions';
import Modal from './components/Modal';

function App() {
  const [currScore, setCurrScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cardData, shuffleCards] = useCardData(spices);
  const [clickHistory, setClickHistory] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setHighScore(Math.max(currScore, highScore));
    if (currScore === 12) setShowModal(true);
  }, [currScore]);

  function resetGame() {
    setShowModal(false);
    setCurrScore(0);
    setClickHistory([]);
  }

  function handleUserClick(event) {
    const id = event.target.closest('.card__container').id;
    if (clickHistory.includes(id)) {
      resetGame();
    } else {
      setClickHistory([...clickHistory, id]);
      setCurrScore(currScore + 1);
    }
    shuffleCards();
  }

  return (
    <div id="app">
      {showModal && <Modal resetGame={resetGame} />}
      <Header />
      <main>
        <div className="flex-container">
          <div className="instructions">
            <span className="bold">Instructions:</span> Try clicking on all
            SpiceCards only once!
          </div>
          <Scoreboard currScore={currScore} highScore={highScore} />
        </div>
        <Gameboard cardData={cardData} handleUserClick={handleUserClick} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
