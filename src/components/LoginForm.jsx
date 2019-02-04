import React from 'react';
import PropTypes from 'prop-types';

import InputGroup from './InputGroup';

const LoginForm = props => (
  <form onSubmit={props.submit}>
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
    <button type="button" onClick={props.goto}>
      Cancel
    </button>
    <button type="submit" id="login">
      Log In
    </button>
  </form>
);

LoginForm.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
};

LoginForm.defaultProps = {
  email: 'email@address.com',
  password: 'Pas5w0rd!',
};

export default LoginForm;
