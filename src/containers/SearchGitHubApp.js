import './SearchGitHubApp.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchUser from '../components/SearchUser';

import * as ProfileActions from '../actions/profile';
import * as NotesActions from '../actions/notes';

class SearchGitHubApp extends Component {
  componentDidMount() {
    const { userName } = this.props.params;

    if (userName) {
      this.loadUser(userName);
    }
  }

  loadUserNotes(userName) {
    const { dispatch } = this.props;

    dispatch(NotesActions.fetchNotes(userName));
  }

  loadUserProfile(userName) {
    const { dispatch } = this.props;


    dispatch(ProfileActions.fetchProfile(userName));
  }

  loadUser(userName) {
    const { history } = this.context;

    this.loadUserProfile(userName);
    this.loadUserNotes(userName);

    history.pushState(null, `/${userName}`);
  }

  render() {
    return (
      <div className="app-container">
        <nav className="header-bar">
          <div>
            <SearchUser onSearchUser={this.loadUser.bind(this)}/>
          </div>
        </nav>

        <div className="main">
          {this.props.children}
        </div>
      </div>
    );
  }
}

SearchGitHubApp.contextTypes = {
  history: React.PropTypes.object.isRequired
};

export default connect()(SearchGitHubApp);
