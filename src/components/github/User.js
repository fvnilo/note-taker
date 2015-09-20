import './User.css';

import React from 'react';

class User extends React.Component {
  render() {
    const { user } = this.props;

    return (
      <div>
        <h2>User Profile</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <img src={user.avatarUrl} className="avatar"/>
          </li>
          { user.name && <li className="list-group-item">Name: {user.name}</li> }
          { user.email && <li className="list-group-item">Email: {user.email}</li> }
          { user.blog && <li className="list-group-item">Blog: <a href={user.blog}>{user.blog}</a></li> }
          { user.company && <li className="list-group-item">Company: {user.company}</li> }
          { user.location && <li className="list-group-item">Location: {user.location}</li>}
          <li className="list-group-item">Hireable: {user.hireable && 'Yes'} {!user.hireable && 'No'}</li>
        </ul>
      </div>);
  }
}

User.propTypes = {
  user: React.PropTypes.object.isRequired
};

export default User;
