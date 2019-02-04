import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import RegisterForm from '../components/RegisterForm';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirm_password: '',
      toRoster: false
    };
  }

  handleInputChange = event => {
    const { target } = event;
    const { value } = target;
    const { name } = target;

    this.setState({
      [name]: value
    });
  };

  matchPasswords = () => {
    if (this.state.password !== this.state.confirm_password) {
      return false;
    } else if (this.state.password === this.state.confirm_password) {
      return true;
    }
  };

  registerUser = data => {
    axios
      .post(
        'https://players-api.developer.alchemy.codes/api/user',
        JSON.stringify(data),
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      .then(response => {
        if (response.data.success === true) {
          localStorage.setItem('token', response.data.token);
          this.setState({
            toRoster: true
          });
        }
      })
      .catch(error =>
        console.log('Error: ', error.response.data.error.message)
      );
  };

  handleSubmit = event => {
    event.preventDefault();

    const data = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      confirm_password: this.state.confirm_password
    };

    this.registerUser(data);
  };

  render() {
    if (this.state.toRoster === true) {
      return <Redirect to="/roster" />;
    }

    const userData = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      confirm_password: this.state.confirm_password
    };

    return (
      <RegisterForm
        data={userData}
        submit={this.handleSubmit}
        change={this.handleInputChange}
      />
    );
  }
}
