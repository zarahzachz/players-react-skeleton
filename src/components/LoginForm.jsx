import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import InputGroup from './InputGroup';

const LoginForm = props => (
  <form onSubmit={props.submit}>
    <InputGroup
      label="Email Address"
      type="email"
      id="email"
      name="email"
      required
      value={props.email}
      change={props.onChange}
    />
    <InputGroup
      label="Password"
      type="password"
      id="password"
      name="password"
      required
      value={props.password}
      change={props.onChange}
    />
    <Link to="/">Cancel</Link>
    <button type="submit" id="login">
      Log In
    </button>
  </form>
);

LoginForm.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  submit: PropTypes.func,
  onChange: PropTypes.func,
};

LoginForm.defaultProps = {
  email: 'email@address.com',
  password: 'Pas5w0rd!',
};

export default LoginForm;
