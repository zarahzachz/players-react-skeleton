import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Field = styled.div`
  label {
    color: rgba(255, 255, 255, 0.8);
    display: flex;
    font-size: 0.75rem;
    flex-direction: column;
  }

  select {
    border: none;
    border-radius: 0;
    box-shadow: none;
    box-sizing: border-box;
    color: black;
    font-size: 1rem;
    height: 2rem;
    max-width: 100%;
    width: 100%;
    margin: 0;
    margin-top: 0.5rem;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: white;
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
    background-repeat: no-repeat, repeat;
    background-position: right 0.7em top 50%, 0 0;
    background-size: 0.65em auto, 100%;

    &::-ms-expand {
      display: none;
    }

    &:focus {
      border-color: #aaa;
      box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
      box-shadow: 0 0 0 3px -moz-mac-focusring;
      color: #222;
      outline: none;
    }

    option {
      font-weight: normal;
    }
  }
`;

const SelectGroup = (props) => {
  const optionData = props.data;
  const options = optionData.map(option => (
    <option key={option.id} value={option.value}>
      {option.title}
    </option>
  ));

  return (
    <Field>
      <label htmlFor={props.id}>
        {props.label}
        <select
          name={props.name}
          id={props.id}
          value={props.value}
          onChange={props.change}
        >
          {options}
        </select>
      </label>
    </Field>
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
  value: PropTypes.string.isRequired,
  name: PropTypes.string,
  change: PropTypes.func.isRequired,
};

SelectGroup.defaultProps = {
  data: [{ id: 1, title: 'Title', value: 'value' }],
  id: 'defaultSelect',
  label: 'Default Select',
  name: 'default_select',
};

export default SelectGroup;
