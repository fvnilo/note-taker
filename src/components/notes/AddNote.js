import React, { Component } from 'react';

class AddNote extends Component {
  onAddNote() {
    const { addNote } = this.props;
    const { value: note } = this.refs.note.getDOMNode();

    addNote(note);

    this.refs.note.getDOMNode().value = '';
  }

  render() {
    return (
      <div className="input-group">
        <input type="text" className="form-control" ref="note" placeholder="Add New Note..." />
        <span className="input-group-btn">
          <button className="btn btn-default" onClick={this.onAddNote.bind(this)}>Add</button>
        </span>
      </div>
    );
  }
}

AddNote.propTypes = {
  addNote: React.PropTypes.func.isRequired
};

export default AddNote;
