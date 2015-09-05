import React, { Component } from 'react'; // eslint-disable-line no-unused-vars

export default class Repos extends Component {
  renderRepos(repos) {
    return repos.map((repo) =>
      <li className="list-group-item" key={repo.id}>
        <h4><a href={repo.html_url}>{repo.name}</a></h4>
        { repo.description && repo.description }
      </li>
    );
  }

  render() {
    const { repos } = this.props;

    return (
      <div>
        <h2>Repos</h2>
        <ul className="list-group">
          {this.renderRepos(repos)}
        </ul>
      </div>);
  }
}
