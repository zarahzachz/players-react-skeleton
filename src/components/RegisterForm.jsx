import React from 'react';

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

export default RegisterForm;
