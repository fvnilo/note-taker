import React, { Component } from 'react';

class NoteList extends Component {
  renderNotes(notes) {
    return notes.map((note, index) =>
      <li key={index}>
        {note}
      </li>
    );
  }

  render() {
    const { notes } = this.props;

    return (
      <ul>
        {this.renderNotes(notes)}
      </ul>
    );
  }
}

NoteList.propTypes = {
  notes: React.PropTypes.array.isRequired
};

export default NoteList;
