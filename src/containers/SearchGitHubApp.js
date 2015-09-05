import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import { Router, Route } from 'react-router';

import SearchUser from '../components/SearchUser';
import Home from '../components/Home';
import Profile from '../components/Profile';

export default class SearchGitHubApp extends Component {
  render() {
    return (
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-sm-7 col-sm-offset-2" style={{ marginTop: 15 }}>
            <SearchUser />
          </div>
        </nav>
        <div className="container">
          <Router history={this.props.history}>
            <Route path='/' component={Home} />
            <Route path='/:username' component={Profile} />
          </Router>
        </div>
      </div>
    );
  }
}
