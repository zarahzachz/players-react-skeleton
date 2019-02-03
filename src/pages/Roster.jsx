import React, { Component } from 'react';
import axios from 'axios';

import PageHeader from '../components/PageHeader';
import PlayerList from '../components/PlayerList';

export default class Roster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    };
    this.getRoster = this.getRoster.bind(this);
    this.addPlayer = this.addPlayer.bind(this);
  }

  getRoster(token) {
    axios
      .get('https://players-api.developer.alchemy.codes/api/players', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        if (response.statusText === 'OK') {
          this.setState({
            players: response.data.players
          });
        }
      })
      .catch(error => {
        console.log('Error: ', error);
      });
  }

  removePlayer = id => {
    const token = localStorage.getItem('token').toString();
    axios
      .delete(`https://players-api.developer.alchemy.codes/api/players/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        this.setState({
          players: this.state.players.filter(player => player.id !== id)
        });
      })
      .catch(error => {
        console.log('Error: ', error.response.data.error.message);
      });
  };

  addPlayer(event) {
    event.preventDefault();
    this.props.history.push('/player/new');
  }

  removePlayer = event => {
    event.preventDefault;
    this.delete;
  };

  componentDidMount() {
    const token = localStorage.getItem('token').toString();
    this.getRoster(token);
  }

  render() {
    console.log(this.state.players);
    return (
      <React.Fragment>
        <PageHeader title="Roster" />
        <PlayerList
          data={this.state.players}
          removePlayer={this.removePlayer}
        />
        <button onClick={this.addPlayer}>Add player</button>
      </React.Fragment>
    );
  }
}
