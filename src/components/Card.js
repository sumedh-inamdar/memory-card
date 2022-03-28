import PropTypes from 'prop-types';
import '../styles/Card.css';

function toggleCardHover(event) {
  const target = event.target
    .closest('.card__container')
    .querySelector('.cardHover');
  console.log(event.target);
  target.classList.toggle('noDisplay');
}

export default function Card({ value, src, id, handleUserClick }) {
  return (
    <div
      onMouseEnter={toggleCardHover}
      onMouseLeave={toggleCardHover}
      onClick={handleUserClick}
      id={id}
      className="card__container">
      <img src={src} alt={value} className="cardImage" width="250" />
      <div className="cardHover noDisplay">
        <span className="cardHover__text">{value}</span>
      </div>
    </div>
  );
}
Card.propTypes = {
  value: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleUserClick: PropTypes.func.isRequired
};
