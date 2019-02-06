import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import ErrorMessage from '../components/ErrorMessage';
import PageHeader from '../components/PageHeader';
import PlayerList from '../components/PlayerList';

const Button = styled(Link)`
  background-color: mediumslateblue;
  border: 1px solid mediumslateblue;
  color: white;
  font-size: 1rem;
  padding: 1rem 1.5rem;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  text-transform: uppercase;
`;

export default class Roster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      errorMessage: '',
      hasError: false,
    };
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
        this.setState({
          errorMessage: error.response.data.error.message,
          hasError: true,
        });
      });
  }

  removePlayer(id) {
    const token = localStorage.getItem('token');
    axios
      .delete(`https://players-api.developer.alchemy.codes/api/players/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        this.setState({
          players: this.state.players.filter(player => player.id !== id),
        });
      })
      .catch((error) => {
        this.setState({
          errorMessage: error.response.data.error.message,
        });
      });
  }

  render() {
    let error;
    if (this.state.hasError === true) {
      error = <ErrorMessage error={this.state.errorMessage} />;
    }
    return (
      <React.Fragment>
        {error}
        <PageHeader title="Roster" />
        <PlayerList
          data={this.state.players}
          removePlayer={this.removePlayer}
        />
        <Button to="/player/new">Add Competitor</Button>
      </React.Fragment>
    );
  }
}
