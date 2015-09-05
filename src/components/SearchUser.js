import React, { Component } from 'react';

export default class SearchUser extends Component {
  render() {
    return (
      <div className="input-group col-sm-12">
        <div className="form-group col-sm-7">
          <input type="text" className="form-control" placeholder="Search User..." />
        </div>
        <div className="form-group col-sm-5">
          <button className="btn btn-block btn-primary">Search</button>
        </div>
      </div>
    );
  }
}
