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
  console.log('App load');

  useEffect(() => {
    console.log('set high score');
    setHighScore(Math.max(currScore, highScore));
  }, [currScore]);

  function resetGame() {
    setCurrScore(0);
    setClickHistory([]);
  }

  function handleUserClick(event) {
    const id = event.target.id;
    if (clickHistory.includes(id)) {
      resetGame();
    } else {
      setClickHistory([...clickHistory, id]);
      setCurrScore(currScore + 1);
    }
    setCardData(shuffleArray(cardData));
  }

  return (
    <div id="app">
      <Header />
      <Scoreboard currScore={currScore} highScore={highScore} />
      <Gameboard cardData={cardData} handleUserClick={handleUserClick} />
      <Footer />
    </div>
  );
}

export default App;
