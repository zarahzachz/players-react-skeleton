import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from '../styles';

import InputGroup from './InputGroup';

const FieldsContainer = styled.div`
  background-color: rgba(139, 0, 139, 0.25);
  border: 1px solid darkmagenta;
  margin-bottom: 2rem;
  padding: 1rem;
  display: grid;
  grid-gap: 1.5rem;
`;

const FieldsRow = styled.div`
  display: grid;
  grid-gap: 1.5rem;

  @media screen and (min-width: ${styles.screen.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ButtonWrapper = styled.div`
  display: grid;
  grid-gap: 16px;

  @media screen and (min-width: ${styles.screen.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Button = styled(Link)`
  background-color: ${props =>
    (props.ghost ? 'transparent' : 'mediumslateblue')};
  border: 1px solid mediumslateblue;
  color: white;
  font-family: ${styles.font.base};
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1rem;
  padding: 1rem 1.5rem;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RegisterForm = props => (
  <form onSubmit={props.submit}>
    <FieldsContainer>
      <FieldsRow>
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
      </FieldsRow>
      <InputGroup
        label="Email Address"
        type="email"
        id="email"
        name="email"
        required
        value={props.email}
        change={props.change}
      />
      <FieldsRow>
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
      </FieldsRow>
    </FieldsContainer>
    <ButtonWrapper>
      <Button ghost="true" to="/">
        Cancel
      </Button>
      <Button as="button" type="submit" id="register">
        Register
      </Button>
    </ButtonWrapper>
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
