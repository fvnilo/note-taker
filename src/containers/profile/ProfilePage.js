import './ProfilePage.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as NotesActions from '../../actions/notes';

import User from '../../components/github/User';
import Repos from '../../components/github/Repos';

import Notes from '../../components/notes/Notes';

class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: []
    };
  }

  addNote(note) {
    const { dispatch } = this.props;

    dispatch(NotesActions.addNote(note));
  }

  renderProfile(user, repos, notes) {
    return (
      <div className="profile-sections">
        <div className="profile-section"><User user={user} /></div>
        <div className="profile-section"><Repos repos={repos} /></div>
        <div className="profile-section"><Notes notes={notes} addNote={this.addNote.bind(this)} /></div>
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
    const { notes } = this.props;

    return (
      <div>
        { errorOccured && this.renderErrorMessage() }
        { !errorOccured && isFetching && this.renderLoading() }
        { !errorOccured && !isFetching && this.renderProfile(user, repos, notes) }
      </div>
    );
  }
}

ProfilePage.propTypes = {
  profile: React.PropTypes.object.isRequired
};

ProfilePage.contextTypes = {
  history: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    profile: state.profile,
    notes: state.notes.items
  };
}

export default connect(mapStateToProps)(ProfilePage);