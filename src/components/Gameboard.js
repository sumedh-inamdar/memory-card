import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

export default function Gameboard({ cardData, handleUserClick }) {
  console.log('Gameboard load');
  console.log('Gameboard cardData:', cardData);
  return (
    <div>
      {cardData.map((card) => (
        <Card
          key={card.id}
          value={card.name}
          src={card.src}
          handleUserClick={handleUserClick}
        />
      ))}
    </div>
  );
}
Gameboard.propTypes = {
  cardData: PropTypes.array,
  handleUserClick: PropTypes.func.isRequired
};
