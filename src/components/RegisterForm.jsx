import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import InputGroup from './InputGroup';

const RegisterForm = props => (
  <form onSubmit={props.submit}>
    <InputGroup
      label="First Name"
      type="text"
      id="firstName"
      name="first_name"
      required
      value={props.first_name}
      change={props.change}
    />
    <InputGroup
      label="Last Name"
      type="text"
      id="lastName"
      name="last_name"
      required
      value={props.last_name}
      change={props.change}
    />
    <InputGroup
      label="Email Address"
      type="email"
      id="email"
      name="email"
      required
      value={props.email}
      change={props.change}
    />
    <InputGroup
      label="Password"
      type="password"
      id="password"
      name="password"
      required
      value={props.password}
      change={props.change}
    />
    <InputGroup
      label="Confirm Password"
      type="password"
      id="confirmPassword"
      name="confirm_password"
      required
      value={props.confirm_password}
      change={props.change}
    />
    <button type="submit" id="register">
      Register
    </button>
    <Link to="/">Cancel</Link>
  </form>
);

RegisterForm.propTypes = {
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  confirm_password: PropTypes.string,
  submit: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
};

RegisterForm.defaultProps = {
  first_name: 'Jack',
  last_name: 'Black',
  email: 'tenacious@d.com',
  password: 'Pas5w0rd!',
  confirm_password: 'Pas5w0rd!',
};

export default RegisterForm;
