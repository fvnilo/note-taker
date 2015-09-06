import React, { Component } from 'react';

import AddNote from './AddNote';
import NotesList from './NotesList';


export default class Notes extends Component {
  render() {
    const { notes } = this.props;

    return (
      <div>
        <h2>Notes</h2>
          <AddNote />
          <NotesList notes={notes} />
      </div>
    );
  }
}
