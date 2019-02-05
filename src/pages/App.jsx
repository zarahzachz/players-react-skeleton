import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Login from './Login';
import NewPlayer from './NewPlayer';
import NotFound from './NotFound';
import Register from './Register';
import Roster from './Roster';
import Welcome from './Welcome';

const GlobalStyle = createGlobalStyle`
  body {
    background: midnightblue;
    background-image: linear-gradient(65deg, midnightblue, black);
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;

const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/roster" component={Roster} />
        <Route path="/player/new" component={NewPlayer} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </React.Fragment>
);

export default App;
