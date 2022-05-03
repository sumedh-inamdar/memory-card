import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Modal({ resetGame }) {
  function checkModalClick(event) {
    if (event.target == this.document.querySelector('.modal')) resetGame();
  }

  useEffect(() => {
    window.addEventListener('click', checkModalClick);

    return () => {
      window.removeEventListener('click', checkModalClick);
    };
  }, []);

  return (
    <div id="endModal" className="modal">
      <div className="modal-content">
        <p>Great Job! You got all of them 👏</p>
        <button onClick={resetGame}>Play Again?</button>
      </div>
    </div>
  );
}
Modal.propTypes = {
  resetGame: PropTypes.func.isRequired
};
