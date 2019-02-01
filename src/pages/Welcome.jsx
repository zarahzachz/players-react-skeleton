import React, { Component } from 'react';

class Welcome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div>
    );
  }
}

export default Welcome;
