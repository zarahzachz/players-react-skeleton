import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from '../styles';

const Field = styled.div`
  font-family: ${styles.font.base};

  label {
    color: rgba(255, 255, 255, 0.8);
    display: flex;
    font-size: 0.75rem;
    flex-direction: column;
  }

  input {
    border: none;
    flex: 0 0 auto;
    font-size: 1rem;
    height: 2rem;
    margin-top: 0.5rem;
    width: 100%;
  }
`;

const InputGroup = props => (
  <Field>
    <label htmlFor={props.id}>
      {props.label}
      <input
        type={props.type}
        name={props.name}
        required={props.required}
        id={props.id}
        onChange={props.change}
      />
    </label>
  </Field>
);

InputGroup.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  change: PropTypes.func.isRequired,
};

InputGroup.defaultProps = {
  id: 'defaultInput',
  label: 'Default Input',
  type: 'text',
  name: 'default_input',
  required: true,
};

export default InputGroup;
