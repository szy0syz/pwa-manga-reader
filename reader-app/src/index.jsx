import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';

import grahpqlClient from './api/graphql';
import './global.less';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}

const App = () => {
  return <strong>App</strong>
}

render(
  <ApolloProvider client={grahpqlClient}>
    <App />
  </ApolloProvider>,
  document.getElementById('app')
);
