import 'babel-core/polyfill';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { createHistory } from 'history';

import Root from './containers/Root';

const history = createHistory();

ReactDOM.render(
  <Root history={history}/>,
  document.getElementById('root')
);
