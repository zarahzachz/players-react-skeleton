import React, { Component } from 'react';
import axios from 'axios';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirm_password: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.matchPasswords = this.matchPasswords.bind(this);
    this.formValidator = this.formValidator.bind(this);
    this.registerUser = this.registerUser.bind(this);
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

  matchPasswords() {
    const passwordError = '';
    if (this.state.password !== this.state.confirm_password) {
      return false;
    } else if (this.state.password === this.state.confirm_password) {
      return true;
    }
  }

  formValidator() {
    if (this.state.first_name.length <= 1) {
      console.log('Please enter your first name.');
      return false;
    } else if (this.state.last_name.length <= 1) {
      console.log('Please enter your last name.');
      return false;
    } else if (this.state.email.length <= 1) {
      console.log('Please enter your email address.');
      return false;
    } else if (this.state.password.length <= 1) {
      console.log('Please enter your password.');
      return false;
    }
  }

  registerUser(data) {
    axios
      .post('https://players-api.developer.alchemy.codes/api/user', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        if (response.statusText === 'OK') {
          console.log('Success: ', response);
          localStorage.setItem('token', response.data.token);
        }
      })
      .catch(error => console.log('Error: ', error));
  }

  handleSubmit(event) {
    event.preventDefault();

    this.formValidator();

    // prevent submit if formValidator returns false

    const data = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      confirm_password: this.state.confirm_password,
    };

    this.registerUser(data);

    // if successful, redirect to /roster
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>First name</label>
          <input
            type="text"
            required
            name="first_name"
            value={this.state.first_name}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label>Last name</label>
          <input
            type="text"
            required
            name="last_name"
            value={this.state.last_name}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label>Email address</label>
          <input
            type="email"
            required
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            required
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label>Confirm password</label>
          <input
            type="password"
            required
            name="confirm_password"
            value={this.state.confirm_password}
            onChange={this.handleInputChange}
          />
          <p>{this.passwordError}</p>
        </div>
        <button type="submit">Submit</button>
        <button type="button">Cancel</button>
      </form>
    );
  }
}
