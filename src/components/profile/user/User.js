import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './User.css';

class User extends React.Component {
  render() {
    const { user } = this.props;

    return (
      <div>
        <h2>User Profile</h2>
        <ul>
          <li>
            <img src={user.avatarUrl} styleName="avatar"/>
          </li>
          { user.name && <li>Name: {user.name}</li> }
          { user.email && <li>Email: {user.email}</li> }
          { user.blog && <li>Blog: <a href={user.blog}>{user.blog}</a></li> }
          { user.company && <li>Company: {user.company}</li> }
          { user.location && <li>Location: {user.location}</li>}
          <li>Hireable: {user.hireable ? 'Yes' : 'No'}</li>
        </ul>
      </div>);
  }
}

User.propTypes = {
  user: React.PropTypes.object.isRequired
};

export default CSSModules(User, styles);
