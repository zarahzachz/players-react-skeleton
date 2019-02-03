import React from 'react';

const Player = props => (
  <li>
    <p>
      {props.firstname} {props.lastname}
    </p>
    <p>
      {props.rating} {props.handedness}
    </p>
  </li>
);

export default Player;
