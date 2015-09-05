import React, { Component } from 'react'; // eslint-disable-line no-unused-vars

import SearchUser from '../components/SearchUser';

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
          {this.props.children}
        </div>
      </div>
    );
  }
}
