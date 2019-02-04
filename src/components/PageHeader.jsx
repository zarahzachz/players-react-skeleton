import React from 'react';
import PropTypes from 'prop-types';

const PageHeader = props => <h1>{props.title}</h1>;

PageHeader.propTypes = {
  title: PropTypes.string,
};

PageHeader.defaultProps = {
  title: 'Be excellent to one another!',
};

export default PageHeader;
