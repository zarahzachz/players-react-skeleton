import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import NewPlayerForm from '../components/NewPlayerForm';

export default class NewPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      rating: '',
      handedness: '',
      toRoster: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addPlayer = this.addPlayer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { target } = event;
    const { value } = target;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  }

  addPlayer(data) {
    const token = localStorage.getItem('token');
    axios
      .post(
        'https://players-api.developer.alchemy.codes/api/players',
        JSON.stringify(data),
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((response) => {
        if (response.data.success === true) {
          this.setState({
            toRoster: true,
          });
        }
      })
      .catch(error =>
        console.log('Error: ', error.response.data.error.message));
  }

  handleSubmit(event) {
    event.preventDefault();

    const data = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      rating: this.state.rating,
      handedness: this.state.handedness,
    };

    this.addPlayer(data);
  }

  render() {
    if (this.state.toRoster === true) {
      return <Redirect to="/roster" />;
    }

    const playerData = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      rating: this.state.rating,
      handedness: this.state.handedness,
    };

    return (
      <NewPlayerForm
        data={playerData}
        submit={this.handleSubmit}
        change={this.handleInputChange}
      />
    );
  }
}
