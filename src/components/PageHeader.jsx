import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from '../styles';

const Header = styled.h1`
  color: white;
  font-family: ${styles.font.header};
  font-size: 2.5rem;
  line-height: 1;
  margin: 0;
  text-align: center;
  text-transform: capitalize;
`;

const PageHeader = props => <Header>{props.title}</Header>;

PageHeader.propTypes = {
  title: PropTypes.string,
};

PageHeader.defaultProps = {
  title: 'Be excellent to one another!',
};

export default PageHeader;
