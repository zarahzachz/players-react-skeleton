import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PageHeader from '../components/PageHeader';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.goTo = this.goTo.bind(this);
  }

  goTo(event, url) {
    event.preventDefault();
    this.props.history.push(`/${url}`);
  }

  render() {
    return (
      <div>
        <PageHeader title="Welcome" />
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    );
  }
}

export default Welcome;
