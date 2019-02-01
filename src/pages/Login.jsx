import React, { Component } from 'react';
import { loginUser } from '../api';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.login = this.login.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  login(event) {
    event.preventDefault();

    const data = {
      email: this.state.email,
      password: this.state.password,
    };

    loginUser(data);

    // if successful, redirect to /roster

    // if error.message: Email or password not found display error
  }

  render() {
    return (
      <form onSubmit={this.login}>
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
