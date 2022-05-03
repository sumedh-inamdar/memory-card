import { useState } from 'react';

function shuffleArray(array) {
  let arrayCopy = [...array];
  for (let i = arrayCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arrayCopy[i];
    arrayCopy[i] = arrayCopy[j];
    arrayCopy[j] = temp;
  }
  return arrayCopy;
}

export function useCardData(array) {
  const [cardData, setCardData] = useState(shuffleArray(array));

  function shuffleCards() {
    setCardData(shuffleArray(cardData));
  }

  return [cardData, shuffleCards];
}
