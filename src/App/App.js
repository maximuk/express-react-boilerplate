import React from 'react';
import { hot } from 'react-hot-loader';

import Main from '../Main/Main';

const App = () => (
  <React.Fragment>
    <Main />
    <Main />
  </React.Fragment>
);

export default hot(module)(App);
