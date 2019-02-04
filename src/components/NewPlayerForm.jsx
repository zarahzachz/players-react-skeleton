import React from 'react';
import PropTypes from 'prop-types';

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
        required
        value={props.first_name}
        change={props.change}
      />
      <InputGroup
        label="Last Name"
        type="text"
        id="lastName"
        name="last_name"
        required
        value={props.last_name}
        change={props.change}
      />
      <InputGroup
        label="Rating"
        type="text"
        id="rating"
        name="rating"
        required
        value={props.rating}
        change={props.change}
      />
      <SelectGroup
        data={options}
        label="Handedness"
        id="handedness"
        name="handedness"
        required
        value={props.handedness}
        change={props.change}
      />
      <button type="submit" id="create">
        Create
      </button>
      <Link to="/roster">Cancel</Link>
    </form>
  );
};

NewPlayerForm.propTypes = {
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  rating: PropTypes.string,
  handedness: PropTypes.oneOf(['right', 'left']),
};

NewPlayerForm.defaultProps = {
  first_name: 'Eddie',
  last_name: 'Van Halen',
  rating: '11',
  handedness: 'right',
};

export default NewPlayerForm;
