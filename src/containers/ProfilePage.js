import React, { Component } from 'react';
import { connect } from 'react-redux';

import Rebase from 're-base';

import User from '../components/github/User';
import Repos from '../components/github/Repos';

import Notes from '../components/notes/Notes';

var base = Rebase.createClass('https://fanilo-github-notes.firebaseio.com/');

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: []
    };
  }

  bindNotes(userName) {
    this.ref = base.bindToState(userName, {
      context: this,
      state: 'notes',
      asArray: true
    });
  }

  componentWillReceiveProps() {
    const { userName } = this.props.params;

    if (this.ref) {
      base.removeBinding(this.ref);
    }

    this.bindNotes(userName);
  }

  componentWillUnmout() {
    base.removeBinding(this.ref);
  }

  renderProfile(user, repos, notes) {
    return (
      <div className="row">
        <div className="col-sm-4"><User user={user} /></div>
        <div className="col-sm-4"><Repos repos={repos} /></div>
        <div className="col-sm-4"><Notes notes={notes} /></div>
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
    const { notes } = this.state;

    return (
      <div>
        { errorOccured && this.renderErrorMessage() }
        { !errorOccured && isFetching && this.renderLoading() }
        { !errorOccured && !isFetching && this.renderProfile(user, repos, notes) }
      </div>
    );
  }
}

Profile.contextTypes = {
  router: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    profile: state.profile
  };
}

export default connect(mapStateToProps)(Profile);
