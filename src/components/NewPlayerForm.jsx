import React from 'react';

import InputGroup from './InputGroup';
import SelectGroup from './SelectGroup';

const NewPlayerForm = (props) => {
  const options = ['Right', 'Left'];

  return (
    <form onSubmit={props.submit}>
      <InputGroup
        label="First Name"
        type="text"
        id="firstName"
        name="first_name"
        required="true"
        value={props.first_name}
        change={props.change}
      />
      <InputGroup
        label="Last Name"
        type="text"
        id="lastName"
        name="last_name"
        required="true"
        value={props.last_name}
        change={props.change}
      />
      <InputGroup
        label="Rating"
        type="text"
        id="rating"
        name="rating"
        required="true"
        value={props.rating}
        change={props.change}
      />
      <SelectGroup
        data={options}
        label="Handedness"
        id="handedness"
        name="handedness"
        required="true"
        value={props.handedness}
        change={props.change}
      />
      <button type="submit" id="create">
        Create
      </button>
    </form>
  );
};

export default NewPlayerForm;
