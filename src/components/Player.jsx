import React from 'react';

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

export default Player;
