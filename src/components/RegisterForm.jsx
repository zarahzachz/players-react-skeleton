import React from 'react';
import PropTypes from 'prop-types';

import InputGroup from './InputGroup';

const RegisterForm = props => (
  <form onSubmit={props.submit}>
    <InputGroup
      label="First Name"
      type="text"
      id="firstName"
      name="first_name"
      required="true"
      value={props.first_name}
      change={props.change}
    />
    <InputGroup
      label="Last Name"
      type="text"
      id="lastName"
      name="last_name"
      required="true"
      value={props.last_name}
      change={props.change}
    />
    <InputGroup
      label="Email Address"
      type="email"
      id="email"
      name="email"
      required="true"
      value={props.email}
      change={props.change}
    />
    <InputGroup
      label="Password"
      type="password"
      id="password"
      name="password"
      required="true"
      value={props.password}
      change={props.change}
    />
    <InputGroup
      label="Confirm Password"
      type="password"
      id="confirmPassword"
      name="confirm_password"
      required="true"
      value={props.confirm_password}
      change={props.change}
    />
    <button type="submit" id="register">
      Register
    </button>
    <button type="button" onClick={event => this.goTo(event, '')}>
      Cancel
    </button>
  </form>
);

RegisterForm.propTypes = {
  submit: PropTypes.func,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  confirm_password: PropTypes.string,
  change: PropTypes.func,
};

RegisterForm.defaultProps = {
  submit: this.handleSubmit,
  first_name: 'Jack',
  last_name: 'Black',
  email: 'tenacious@d.com',
  password: 'Pas5w0rd!',
  confirm_password: 'Pas5w0rd!',
  change: this.handleChange,
};
export default RegisterForm;
