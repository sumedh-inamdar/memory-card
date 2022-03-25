import React from 'react';
import PropTypes from 'prop-types';

export default function Scoreboard(props) {
  return (
    <div className="scoreboard__Container">
      <div>Current Score: {props.currScore}</div>
      <div>High Score: {props.highScore}</div>
    </div>
  );
}
Scoreboard.propTypes = {
  currScore: PropTypes.number.isRequired,
  highScore: PropTypes.number.isRequired
};
