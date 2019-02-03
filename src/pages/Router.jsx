import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import Welcome from './Welcome';
import Register from './Register';
import Login from './Login';
import Roster from './Roster';
import NewPlayer from './NewPlayer';

const Router = () => (
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/roster" component={Roster} />
        <Route exact path="/player/new" component={NewPlayer} />
      </Switch>
    </App>
  </BrowserRouter>
);

export default Router;
