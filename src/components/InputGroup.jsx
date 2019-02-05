import React from 'react';
import PropTypes from 'prop-types';

const InputGroup = props => (
  <div>
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
  </div>
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
