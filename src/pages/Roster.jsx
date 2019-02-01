import React, { Component } from 'react';
import { getRoster } from '../api';

export default class Roster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      players: [],
    };
  }

  componentDidMount() {
    getRoster().then(
      (data) => {
        this.setState({ isLoaded: true, players: data });
      },
      (error) => {
        this.setState({ isLoaded: true, error });
      },
    );
  }

  render() {
    const { error, isLoaded, players } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <ul>
        {players.map(player => (
          <li key={player.id}>
            <p>
              {player.first_name} {player.last_name}
            </p>
            <p>
              {player.handedness} {player.rating}
            </p>
          </li>
        ))}
      </ul>
    );
  }
}
