import React from 'react';

import Player from './Player';

const PlayerList = (props) => {
  const results = props.data;
  const players = results.map(player => (
    <Player
      key={player.id}
      firstname={player.first_name}
      lastname={player.last_name}
      rating={player.rating}
      handedness={player.handedness}
    />
  ));
  return <ul>{players}</ul>;
};

export default PlayerList;
