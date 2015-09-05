import 'babel-core/polyfill';

import React from 'react';
import { Provider } from 'react-redux';
import BrowserHistory from 'react-router/lib/BrowserHistory';

import SearchGitHubApp from './containers/SearchGitHubApp';

React.render(
  <Provider>
    { () => <SearchGitHubApp history={ new BrowserHistory }/> }
  </Provider>,
  document.getElementById('root')
);
