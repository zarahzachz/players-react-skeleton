import React from 'react';
import styled from 'styled-components';
import styles from '../styles';

const Err = styled.p`
  color: white;
  background-color: darkmagenta;
  font-family: ${styles.font.base};
  font-size: 1rem;
  margin: 0;
  padding: 1rem;
`;

const ErrorMessage = props => <Err>{props.error}.</Err>;

export default ErrorMessage;
