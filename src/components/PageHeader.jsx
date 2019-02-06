import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from '../styles';

const Header = styled.h1`
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
  line-height: 1;
  margin: 0;
  text-align: center;

  @media screen and (min-width: ${styles.screen.mobile}) {
    font-size: 3.75rem;
  }
`;

const PageHeader = props => <Header>{props.title}</Header>;

PageHeader.propTypes = {
  title: PropTypes.string,
};

PageHeader.defaultProps = {
  title: 'Be excellent to one another!',
};

export default PageHeader;
