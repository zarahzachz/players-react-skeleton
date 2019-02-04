import React, { Component } from 'react';

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
        <button onClick={event => this.goTo(event, 'login')}>Login</button>
        <button onClick={event => this.goTo(event, 'register')}>
          Register
        </button>
      </div>
    );
  }
}

export default Welcome;
