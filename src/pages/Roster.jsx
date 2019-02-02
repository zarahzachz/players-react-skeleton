import React, { Component } from 'react';
import axios from 'axios';

export default class Roster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
    };
    this.getRoster = this.getRoster.bind(this);
  }

  getRoster(token) {
    axios
      .get('https://players-api.developer.alchemy.codes/api/players', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        this.setState({
          players: response.data,
        });
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  }

  componentDidMount() {
    const token = localStorage.getItem('token').toString();
    this.getRoster(token);
  }

  render() {
    return (
      <ul>
        {this.state.players.map(player => (
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
