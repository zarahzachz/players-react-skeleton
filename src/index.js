import React from 'react';
import ReactDOM from 'react-dom';
import Router from './pages/Router';
// Importing the fetch polyfill allows cypress to intercept fetch api requests.
import 'whatwg-fetch';
// Change me if you prefer sass,scss, less. (Note you may need to update the build config)
import './styles/index.scss';

ReactDOM.render(<Router />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
