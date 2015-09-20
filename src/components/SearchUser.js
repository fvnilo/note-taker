import './SearchUser.css';

import React, { Component } from 'react';

import { ENTER_KEY_CODE } from '../constants/Constants';

class SearchUser extends Component {
  onKeyDown(e) {
    if (e.keyCode === ENTER_KEY_CODE) {
      this.searchUser();
    }
  }

  searchUser() {
    const { onSearchUser } = this.props;
    const { value: userName } = this.refs.userName.getDOMNode();

    onSearchUser(userName);
  }

  render() {
    return (
      <div>
        <input className="user-name-search" type="text" placeholder="Search User..." onKeyDown={this.onKeyDown.bind(this)} ref="userName" />
        <button onClick={this.searchUser.bind(this)}>Search</button>
      </div>
    );
  }
}

SearchUser.propTypes = {
  onSearchUser: React.PropTypes.func.isRequired
};

export default SearchUser;
