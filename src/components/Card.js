import PropTypes from 'prop-types';
import '../styles/Card.css';

export default function Card({ value, src, id, handleUserClick }) {
  return (
    <div onClick={handleUserClick} id={id} className="card__container">
      <img src={src} alt={value} className="cardImage" />
      <div className="cardHover">
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
