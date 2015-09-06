import React, { Component } from 'react';
import { connect } from 'react-redux';

import User from '../components/github/User';
import Repos from '../components/github/Repos';

class Profile extends Component {
  renderProfile(user, repos) {
    return (
      <div className="row">
        <div className="col-sm-4"><User user={user} /></div>
        <div className="col-sm-4"><Repos repos={repos} /></div>
        <div className="col-sm-4">Notes</div>
      </div>);
  }

  renderLoading() {
    return (
      <div className="row">
        <div className="col-sm-12 text-center">
          <h1>Loading Profile...</h1>
        </div>
      </div>
    );
  }

  renderErrorMessage() {
    return (
      <div className="row">
        <div className="col-sm-12 text-center">
          <h1>Oops... An error occured while fetching the profile!</h1>
        </div>
      </div>
    );
  }

  render() {
    const { errorOccured, isFetching, user, repos } = this.props.profile;

    return (
      <div>
        { errorOccured && this.renderErrorMessage() }
        { !errorOccured && isFetching && this.renderLoading() }
        { !errorOccured && !isFetching && this.renderProfile(user, repos) }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile
  };
}

export default connect(mapStateToProps)(Profile);
