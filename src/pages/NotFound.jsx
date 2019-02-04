import React from 'react';

import image from '../assets/images/404.gif';

const NotFound = () => (
  <div>
    <h1>404 :(</h1>
    <p>Page not found.</p>
    <img src={image} alt="Page not found - try going somewhere else." />
  </div>
);

export default NotFound;
