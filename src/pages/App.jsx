import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import Login from './Login';
import NewPlayer from './NewPlayer';
import NotFound from './NotFound';
import Register from './Register';
import Roster from './Roster';
import Welcome from './Welcome';

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 18px;
  }

  html, body {
    box-sizing: border-box;
    min-height: 100%;
    margin: 0;
  }

  body {
    background: midnightblue;
    background-image: linear-gradient(65deg, midnightblue, black);
    background-repeat: no-repeat;
    background-size: cover;
    padding: 1rem;
  }
`;

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding-top: 100px;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 2.75rem;
`;

const App = () => (
  <Container>
    <Grid>
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
    </Grid>
  </Container>
);

export default App;
