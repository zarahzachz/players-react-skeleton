import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Player from './Player';

const List = styled.div`
  background-color: white;
  border: none;
  color: black;
  font-size: 1rem;
  margin: 0;
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: 1fr 3fr 1fr 1fr;
`;

const Header = styled.div`
  background-color: darkmagenta;
  color: white;
  font-weight: bold;
  grid-column-end: span 4;
  display: inline-grid;
  grid-gap: 0.5rem;
  grid-template-columns: 1fr 3fr 1fr 1fr;
  padding: 0.5rem;

  span:last-child {
    grid-column-end: span 2;
  }
`;

const Body = styled.div`
  grid-column-end: span 4;
  display: inline-grid;
  grid-gap: 0.5rem;
  grid-template-columns: 1fr 3fr 1fr 1fr;
  align-items: center;
  padding: 0.5rem;
`;

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
  return (
    <List sortable="sortable">
      <Header>
        <span>Rating</span>
        <span>Name</span>
        <span>Handedness</span>
      </Header>
      <Body>{players}</Body>
    </List>
  );
};

PlayerList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    rating: PropTypes.number,
    handedness: PropTypes.string,
  })),
  removePlayer: PropTypes.func.isRequired,
};

PlayerList.defaultProps = {
  data: [
    {
      first_name: 'Tony',
      last_name: 'Iommi',
      rating: 2,
      handedness: 'right',
    },
  ],
};

export default PlayerList;
