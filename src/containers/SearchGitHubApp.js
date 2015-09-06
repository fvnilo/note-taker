import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchUser from '../components/SearchUser';

import * as ProfileActions from '../actions/profile';

class SearchGitHubApp extends Component {
  componentDidMount() {
    const { userName } = this.props.params;

    if (userName) {
      this.searchUser(userName);
    }
  }

  searchUser(userName) {
    const { dispatch } = this.props;
    const { router } = this.context;

    dispatch(ProfileActions.fetchProfile(userName));

    router.transitionTo(userName, {});
  }

  render() {
    return (
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-sm-7 col-sm-offset-2" style={{ marginTop: 15 }}>
            <SearchUser onSearchUser={this.searchUser.bind(this)}/>
          </div>
        </nav>

        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

SearchGitHubApp.contextTypes = {
  router: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    profile: state.profile
  };
}

export default connect(mapStateToProps)(SearchGitHubApp);
