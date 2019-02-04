import React from 'react';
import PropTypes from 'prop-types';

import Player from './Player';

const PlayerList = (props) => {
  const results = props.data;
  const players = results.map(player => (
    <Player
      key={player.id}
      id={player.id}
      firstname={player.first_name}
      lastname={player.last_name}
      rating={player.rating}
      handedness={player.handedness}
      removePlayer={props.removePlayer}
    />
  ));
  return <ul>{players}</ul>;
};

PlayerList.propTypes = {
  data: PropTypes.array,
  removePlayer: PropTypes.func,
};

PlayerList.defaultProps = {
  data: [
    {
      first_name: 'Tony',
      last_name: 'Iommi',
      rating: '2',
      handedness: 'right',
    },
    {
      first_name: 'Mike', last_name: 'Albert', rating: '9', handedness: 'left',
    },
  ],
  removePlayer: this.removePlayer,
};

export default PlayerList;
