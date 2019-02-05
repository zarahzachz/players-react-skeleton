import React from 'react';
import PropTypes from 'prop-types';

const SelectGroup = (props) => {
  const optionData = props.data;
  const options = optionData.map(option => (
    <option key={option.id} value={option.value}>
      {option.title}
    </option>
  ));

  return (
    <div>
      <label htmlFor={props.id}>
        <select name={props.name} id={props.id}>
          {options}
        </select>
        {props.label}
      </label>
    </div>
  );
};

SelectGroup.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    value: PropTypes.string,
  })),
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
};

SelectGroup.defaultProps = {
  data: [{ id: 1, title: 'Title', value: 'value' }],
  id: 'defaultSelect',
  label: 'Default Select',
  name: 'default_select',
};

export default SelectGroup;
