import React, { Route, DefaultRoute } from 'react-router';

import Home from '../components/Home';

import SearchGitHubApp from '../containers/SearchGitHubApp';

export const routes = (
  <Route path='/' handler={SearchGitHubApp}>
    <DefaultRoute handler={Home} />
  </Route>
);
