import React, { Component } from 'react'; // eslint-disable-line no-unused-vars

export default class Profile extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-4">User</div>
        <div className="col-sm-4">Repos</div>
        <div className="col-sm-4">Notes</div>
      </div>);
  }
}
