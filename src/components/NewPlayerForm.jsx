import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from '../styles';

import InputGroup from './InputGroup';
import SelectGroup from './SelectGroup';

const FieldsContainer = styled.div`
  background-color: rgba(139, 0, 139, 0.25);
  border: 1px solid darkmagenta;
  margin-bottom: 2rem;
  padding: 1rem;
  display: grid;
  grid-gap: 1.5rem;
`;

const FieldsRow = styled.div`
  display: grid;
  grid-gap: 1.5rem;

  @media screen and (min-width: ${styles.screen.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ButtonWrapper = styled.div`
  display: grid;
  grid-gap: 16px;

  @media screen and (min-width: ${styles.screen.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Button = styled(Link)`
  background-color: ${props =>
    (props.ghost ? 'transparent' : 'mediumslateblue')};
  border: 1px solid mediumslateblue;
  color: white;
  font-family: ${styles.font.base};
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1rem;
  padding: 1rem 1.5rem;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NewPlayerForm = (props) => {
  const options = [
    {
      id: 1,
      title: 'Right',
      value: 'right',
    },
    {
      id: 2,
      title: 'Left',
      value: 'left',
    },
  ];

  return (
    <form onSubmit={props.submit}>
      <FieldsContainer>
        <FieldsRow>
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
        </FieldsRow>
        <FieldsRow>
          <InputGroup
            label="Rating"
            type="number"
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
        </FieldsRow>
      </FieldsContainer>
      <ButtonWrapper>
        <Button ghost="true" to="/roster">
          Cancel
        </Button>
        <Button as="button" type="submit" id="create">
          Create
        </Button>
      </ButtonWrapper>
    </form>
  );
};

NewPlayerForm.propTypes = {
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  rating: PropTypes.number,
  handedness: PropTypes.string,
  submit: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
};

NewPlayerForm.defaultProps = {
  first_name: 'Eddie',
  last_name: 'Van Halen',
  rating: 11,
  handedness: 'left',
};

export default NewPlayerForm;
