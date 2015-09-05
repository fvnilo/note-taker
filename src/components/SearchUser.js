import React, { Component } from 'react';

class SearchUser extends Component {
  searchUser() {
    const { router } = this.context;
    const { value:userName } = this.refs.userName.getDOMNode();

    router.transitionTo(userName, {});
  }

  render() {
    return (
      <div className="input-group col-sm-12">
        <div className="form-group col-sm-7">
          <input type="text" className="form-control" placeholder="Search User..." ref="userName" />
        </div>
        <div className="form-group col-sm-5">
          <button className="btn btn-block btn-primary" onClick={this.searchUser.bind(this)}>Search</button>
        </div>
      </div>
    );
  }
}

SearchUser.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default SearchUser;
