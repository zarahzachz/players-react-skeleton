import React from 'react';
import ReactDOM from 'react-dom';
// Importing the fetch polyfill allows cypress to intercept fetch api requests.
import 'whatwg-fetch';
import WebFont from 'webfontloader';

import App from './pages/App';

WebFont.load({
  google: {
    families: ['New Rocker', 'Cinzel'],
  },
});

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
