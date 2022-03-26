import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Scoreboard.css';

export default function Scoreboard(props) {
  console.log('Scoreboard load');
  return (
    <div className="scoreboard__Container">
      <div id="currentScore">Current Score: {props.currScore}</div>
      <div id="highScore">High Score: {props.highScore}</div>
    </div>
  );
}
Scoreboard.propTypes = {
  currScore: PropTypes.number.isRequired,
  highScore: PropTypes.number.isRequired
};
