import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';

import SearchGitHubApp from './SearchGitHubApp';

import Home from '../components/Home';
import ProfilePage from '../containers/ProfilePage';

import configureStore from '../store/configureStore';

const store = configureStore();

function renderRoutes(history) {
  return (
    <Router history={history}>
      <Route component={SearchGitHubApp}>
        <Route path='/' component={Home} />
        <Route path='/:userName' component={ProfilePage} />
      </Route>
    </Router>
  );
}

export default class Root extends Component {
  render() {
    const { history } = this.props;

    return (
      <Provider key="provider" store={store}>
        { renderRoutes.bind(this, history) }
      </Provider>
    );
  }
}
