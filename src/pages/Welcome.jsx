import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import styles from '../styles';

import image from '../assets/images/headbanging.gif';

const DisplayText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    background-image: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(84, 117, 170, 1) 49%,
      rgba(255, 255, 255, 1) 50%,
      rgba(121, 146, 203, 1) 82%,
      rgba(114, 104, 165, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: ${styles.font.header};
    font-size: 2.75rem;
    margin: 0;

    @media screen and (min-width: ${styles.screen.mobile}) {
      font-size: 4.5rem;
    }
  }

  span {
    font-size: 1.25rem;
    text-transform: uppercase;

    @media screen and (min-width: ${styles.screen.mobile}) {
      font-size: 1.5rem;
    }
  }
`;

const Image = styled.img`
  margin: 0 auto;
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
  font-size: 1rem;
  line-height: 1;
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  justify-content: center;
  text-decoration: none;
  text-transform: uppercase;
`;

const Welcome = () => (
  <React.Fragment>
    <DisplayText>
      <h1>Air Guitar</h1> <span>World Championship</span>
    </DisplayText>
    <Image src={image} alt="Handbanging, courtesy of Metalocalypse" />
    <ButtonWrapper>
      <Button ghost="true" to="/login">
        Login
      </Button>
      <Button to="/register">Register</Button>
    </ButtonWrapper>
  </React.Fragment>
);

export default Welcome;
