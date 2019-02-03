import React, { Component } from 'react';
import axios from 'axios';

export default class Roster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
    };
    this.getRoster = this.getRoster.bind(this);
    this.addPlayer = this.addPlayer.bind(this);
  }

  getRoster(token) {
    axios
      .get('https://players-api.developer.alchemy.codes/api/players', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (response.statusText === 'OK') {
          this.setState({
            players: response.data.players,
          });
        }
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  }

  addPlayer(event) {
    event.preventDefault();
    this.props.history.push('/player/new');
  }

  componentDidMount() {
    const token = localStorage.getItem('token').toString();
    this.getRoster(token);
  }

  render() {
    const players = this.state.players;

    return (
      <React.Fragment>
        <h1>Roster</h1>
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
        <button onClick={this.addPlayer}>Add player</button>
      </React.Fragment>
    );
  }
}
