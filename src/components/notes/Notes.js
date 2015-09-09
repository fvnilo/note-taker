import React, { Component } from 'react';

import AddNote from './AddNote';
import NotesList from './NotesList';


export default class Notes extends Component {
  render() {
    const { addNote, notes } = this.props;

    console.log('Notes:');
    console.log(notes);

    return (
      <div>
        <h2>Notes</h2>
          <AddNote addNote={addNote} />
          <NotesList notes={notes} />
      </div>
    );
  }
}
