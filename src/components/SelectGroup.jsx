import React from 'react';

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

export default SelectGroup;
