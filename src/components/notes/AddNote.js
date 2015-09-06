import React, { Component } from 'react';

export default class AddNote extends Component {
  render() {
    return (
      <div className="input-group">
        <input type="text" className="form-control" ref="note" placeholder="Add New Note..." />
        <span className="input-group-btn">
          <button className="btn btn-default">Add</button>
        </span>
      </div>
    );
  }
}
