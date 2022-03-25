import PropTypes from 'prop-types';

export default function Card({ value, src, handleUserClick }) {
  return (
    <div onClick={handleUserClick}>
      {value} {src}
    </div>
  );
}
Card.propTypes = {
  value: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  handleUserClick: PropTypes.func.isRequired
};
