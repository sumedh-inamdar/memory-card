import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Scoreboard.css';

export default function Scoreboard(props) {
  console.log('Scoreboard load');
  return (
    <div className="scoreboard__Container">
      <div id="currentScore">
        <span className="textLight">Current Score:</span> {props.currScore}
      </div>
      <div id="highScore">
        <span className="textLight">High Score:</span> {props.highScore}
      </div>
    </div>
  );
}
Scoreboard.propTypes = {
  currScore: PropTypes.number.isRequired,
  highScore: PropTypes.number.isRequired
};
