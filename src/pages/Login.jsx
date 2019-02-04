import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import LoginForm from '../components/LoginForm';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      toRoster: false,
    };
    this.goTo = this.goTo.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  goTo(event, url) {
    event.preventDefault();
    this.props.history.push(`/${url}`);
  }

  handleInputChange(event) {
    const { target } = event;
    const { value } = target;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  }

  loginUser(data) {
    axios
      .post(
        'https://players-api.developer.alchemy.codes/api/login',
        JSON.stringify(data),
        {
          headers: { 'Content-Type': 'application/json' },
        },
      )
      .then((response) => {
        if (response.data.success === true) {
          localStorage.setItem('token', response.data.token);
          this.setState({
            toRoster: true,
          });
        }
      })
      .catch((error) => {
        console.log('Error: ', error.response.data.error.message);
      });
  }

  handleSubmit(event) {
    event.preventDefault();

    const data = {
      email: this.state.email,
      password: this.state.password,
    };

    this.loginUser(data);
  }

  render() {
    if (this.state.toRoster === true) {
      return <Redirect to="/roster" />;
    }

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    return (
      <LoginForm
        data={userData}
        submit={this.handleSubmit}
        onChange={this.handleInputChange}
      />
    );
  }
}
