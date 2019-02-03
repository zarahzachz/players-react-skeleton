import React, { Component } from 'react';
import image from '../assets/images/404.gif';

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <h1>404 :(</h1>
        <p>Page not found.</p>
        <img src={image} alt="Page not found - try going somewhere else." />
      </div>
    );
  }
}
