import React from 'react';
import PropTypes from 'prop-types';

const SelectGroup = (props) => {
  const optionData = props.data;
  const options = optionData.map(option => (
    <option key={option.id} value={option.toLowerCase()}>
      {option}
    </option>
  ));

  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <select name={props.name} id={props.id}>
        {options}
      </select>
    </div>
  );
};

SelectGroup.propTypes = {
  data: PropTypes.array,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
};

SelectGroup.defaultProps = {
  data: ['orange', 'banana'],
  id: 'defaultSelect',
  label: 'Default Select',
  name: 'default_select',
};

export default SelectGroup;
