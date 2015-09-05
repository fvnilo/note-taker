import 'babel-core/polyfill';

import React from 'react';
import BrowserHistory from 'react-router/lib/BrowserHistory';

import Root from './containers/Root';

React.render(
  <Root history={ new BrowserHistory }/>,
  document.getElementById('root')
);
