import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Err = styled.p`
  background-color: darkmagenta;
  font-size: 1rem;
  margin: 0;
  padding: 1rem;
`;

const ErrorMessage = props => <Err>{props.error}</Err>;

ErrorMessage.propTypes = {
  error: PropTypes.string,
};

ErrorMessage.defaultProps = {
  error: 'This is an error.',
};

export default ErrorMessage;
