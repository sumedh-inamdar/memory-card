import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import '../styles/Gameboard.css';

export default function Gameboard({ cardData, handleUserClick }) {
  return (
    <div className="gameBoard__container">
      {cardData.map((card) => (
        <Card
          key={card.id}
          value={card.name}
          src={card.src}
          id={card.id}
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
