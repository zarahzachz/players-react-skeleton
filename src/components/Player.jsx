import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: midnightblue;
  flex: 0 0 auto;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  line-height: 1;
  cursor: pointer;
  opacity: 0.3;
  justify-self: self-end;

  &:hover {
    opacity: 1;
  }
`;

const Player = (props) => {
  const removePlayer = () => {
    props.removePlayer(props.id);
  };

  return (
    <React.Fragment>
      <div>{props.rating}</div>
      <div>
        {props.firstname} {props.lastname}
      </div>
      <div>
        {props.handedness.charAt(0).toUpperCase() + props.handedness.substr(1)}
      </div>
      <Button className="delete" onClick={removePlayer}>
        &times;
      </Button>
    </React.Fragment>
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
