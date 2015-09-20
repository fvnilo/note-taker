import React from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';

import routes from '../routes';

import configureStore from '../store/configureStore';

const store = configureStore();

export default class Root extends React.Component {
  render() {
    const { history } = this.props;

    return (
      <Provider key="provider" store={store}>
        {() => <Router history={history} routes={routes} /> }
      </Provider>
    );
  }
}
