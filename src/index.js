import React from 'react';
import { render } from 'react-dom';

import App from './App/App';

import './styles/main.scss';

const renderApp = () => {
  render(
    <App />,
    document.getElementById('root')
  );
};

renderApp();

if (module.hot)
  module.hot.accept('./App/App', renderApp);
