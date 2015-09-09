import React, { Component } from 'react';

class NoteList extends Component {
  renderNotes(notes) {
    return notes.map((note, index) =>
      <li className="list-group-item" key={index}>
        {note}
      </li>
    );
  }

  render() {
    const { notes } = this.props;

    return (
      <ul className="list-group">
        {this.renderNotes(notes)}
      </ul>
    );
  }
}

NoteList.propTypes = {
  notes: React.PropTypes.array.isRequired
};

export default NoteList;
