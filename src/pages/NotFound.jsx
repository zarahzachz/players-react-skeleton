import React from 'react';
import styled from 'styled-components';
import styles from '../styles';

import image from '../assets/images/404.gif';
import PageHeader from '../components/PageHeader';

const Image = styled.img`
  height: auto;
  width: 100%;
`;

const Info = styled.p`
  font-size: 1.25rem;
  margin: 0;
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: ${styles.screen.mobile}) {
    font-size: 1.5rem;
  }
`;

const NotFound = () => (
  <React.Fragment>
    <PageHeader title="404 :(" />
    <Info>Page not found.</Info>
    <Image src={image} alt="Page not found - try going somewhere else." />
  </React.Fragment>
);

export default NotFound;
