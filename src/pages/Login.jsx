import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import PageHeader from '../components/PageHeader';
import ErrorMessage from '../components/ErrorMessage';
import LoginForm from '../components/LoginForm';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      toRoster: false,
      errorMessage: '',
      hasError: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.loginUser = this.loginUser.bind(this);
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
        this.setState({
          errorMessage: error.response.data.error.message,
          hasError: true,
        });
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

    let error;
    if (this.state.hasError === true) {
      error = <ErrorMessage error={this.state.errorMessage} />;
    }

    return (
      <React.Fragment>
        <PageHeader title="Sign In" />
        {error}
        <LoginForm
          data={userData}
          submit={this.handleSubmit}
          onChange={this.handleInputChange}
        />
      </React.Fragment>
    );
  }
}
