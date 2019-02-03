import React, { Component } from 'react';
import axios from 'axios';

export default class NewPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      rating: '',
      handedness: 'right',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addPlayer = this.addPlayer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  addPlayer(data, token) {
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
        if (response.statusTest === 'Created') {
          this.props.history.push('/roster');
        }
      })
      .catch(error => console.log('Error: ', error));
  }

  handleSubmit(event) {
    event.preventDefault();

    const data = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      rating: this.state.rating,
      handedness: this.state.handedness,
    };

    const token = localStorage.getItem('token');

    this.addPlayer(data, token);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            required
            name="first_name"
            id="firstName"
            value={this.state.first_name}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            required
            name="last_name"
            id="lastName"
            value={this.state.last_name}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="rating">Rating</label>
          <input
            type="text"
            required
            name="rating"
            id="rating"
            value={this.state.rating}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="handedness">Handedness</label>
          <select
            name="handedness"
            id="handedness"
            value={this.state.handedness}
            onChange={this.handleInputChange}
          >
            <option value="right">Right</option>
            <option value="left">Left</option>
          </select>
        </div>
        <button type="submit" id="create">
          Create
        </button>
      </form>
    );
  }
}
