import React, { Component } from 'react';

import AddNote from './AddNote';
import NotesList from './NotesList';


class Notes extends Component {
  render() {
    const { addNote, notes } = this.props;

    return (
      <div>
        <h2>Notes</h2>
          <AddNote addNote={addNote} />
          <NotesList notes={notes} />
      </div>
    );
  }
}

Notes.propTypes = {
  addNote: React.PropTypes.func.isRequired,
  notes: React.PropTypes.array.isRequired
};

export default Notes;
