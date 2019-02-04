import React, { Component } from 'react';
import axios from 'axios';

import PageHeader from '../components/PageHeader';
import PlayerList from '../components/PlayerList';

export default class Roster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
    };
    this.addPlayer = this.addPlayer.bind(this);
    this.removePlayer = this.removePlayer.bind(this);
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    axios
      .get('https://players-api.developer.alchemy.codes/api/players', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (response.data.success === true) {
          this.setState({
            players: response.data.players,
          });
        }
      })
      .catch((error) => {
        console.log('Error: ', error.response.data.error.message);
      });
  }

  addPlayer(event) {
    event.preventDefault();
    this.props.history.push('/player/new');
  }

  removePlayer(id) {
    const token = localStorage.getItem('token');
    axios
      .delete(`https://players-api.developer.alchemy.codes/api/players/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        this.setState({
          players: this.state.players.filter(player => player.id !== id),
        });
      })
      .catch((error) => {
        console.log('Error: ', error.response.data.error.message);
      });
  }

  render() {
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
