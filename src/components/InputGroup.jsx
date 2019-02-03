import React from 'react';

const InputGroup = props => (
  <div>
    <label htmlFor={props.id}>{props.label}</label>
    <input
      type={props.type}
      name={props.name}
      required={props.required}
      id={props.id}
    />
  </div>
);

export default InputGroup;
