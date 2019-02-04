import React from 'react';
import PropTypes from 'prop-types';

const Player = (props) => {
  const removePlayer = () => {
    props.removePlayer(props.id);
  };

  return (
    <li>
      <p>
        {props.firstname} {props.lastname}
      </p>
      <p>
        {props.rating} {props.handedness}
      </p>
      <button className="delete" onClick={removePlayer}>
        Remove
      </button>
    </li>
  );
};

Player.propTypes = {
  id: PropTypes.string,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  rating: PropTypes.string,
  handedness: PropTypes.oneOf(['right', 'left']),
  removePlayer: PropTypes.func.isRequired,
};

Player.defaultProps = {
  id: '123',
  firstname: 'Darrell',
  lastname: 'Abbott',
  rating: '4',
  handedness: 'left',
};

export default Player;
