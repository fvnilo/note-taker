import React, { Component } from 'react';
import { connect } from 'react-redux';

import CSSModules from 'react-css-modules';
import styles from './ProfilePage.css';

import * as NotesActions from '../../actions/notes';

import User from '../../components/profile/user/User';
import Repos from '../../components/profile/user/Repos';

import Notes from '../../components/profile/notes/Notes';

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
      <div styleName="profile-sections">
        <div styleName="profile-section"><User user={user} /></div>
        <div styleName="profile-section"><Repos repos={repos} /></div>
        <div styleName="profile-section"><Notes notes={notes} addNote={this.addNote.bind(this)} /></div>
      </div>);
  }

  renderLoading() {
    return (
      <h1>Loading Profile...</h1>
    );
  }

  renderErrorMessage() {
    return (
      <h1>Oops... An error occured while fetching the profile!</h1>
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

export default connect(mapStateToProps)(CSSModules(ProfilePage, styles));
