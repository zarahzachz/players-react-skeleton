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

const LoginForm = props => (
  <form onSubmit={props.submit}>
    <FieldsContainer>
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
    </FieldsContainer>
    <ButtonWrapper>
      <Button ghost="true" to="/">
        Cancel
      </Button>
      <Button as="button" type="submit" id="login">
        Log In
      </Button>
    </ButtonWrapper>
  </form>
);

LoginForm.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  submit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

LoginForm.defaultProps = {
  email: 'email@address.com',
  password: 'Pas5w0rd!',
};

export default LoginForm;
