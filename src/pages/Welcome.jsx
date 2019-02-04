import React from 'react';
import { Link } from 'react-router-dom';

import PageHeader from '../components/PageHeader';

const Welcome = () => (
  <div>
    <PageHeader title="Welcome" />
    <Link to="/login">Login</Link>
    <Link to="/register">Register</Link>
  </div>
);

export default Welcome;
