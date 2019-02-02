import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.loginUser = this.login.bind(this);
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

  loginUser(data) {
    axios
      .post('https://players-api.developer.alchemy.codes/api/login', data, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((response) => {
        if (response.statusText === 'OK') {
          console.log('Success: ', response);
          localStorage.setItem('token', response.data.token);
        }
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  }

  handleSubmit(event) {
    event.preventDefault();

    const data = {
      email: this.state.email,
      password: this.state.password,
    };

    this.loginUser(data);

    // if successful, redirect to /roster

    // if error.message: Email or password not found display error
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Email address</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
        </div>
        <button type="button">Cancel</button>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
