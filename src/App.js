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
  const [cardData, setCardData] = useState(spices);
  console.log('App load');

  useEffect(() => {
    console.log('Shuffle');
    setCardData(shuffleArray(cardData));
  }, []);

  function handleUserClick(event) {
    console.log(event.target);
    setCurrScore(currScore + 1);
    setHighScore(highScore + 1);
    setCardData([]);
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
