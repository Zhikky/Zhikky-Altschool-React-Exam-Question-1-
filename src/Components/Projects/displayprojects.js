import React, { Component } from "react";
import content from "./content.json";
import RepoCard from "../Projects/repositorycards";
import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";
import "./projects.css"

class Repos extends Component {
  filterRepositories = (repos) => {
    const { number_of_repos_to_show } = content;

    return repos.map(
      (repo, ind) =>
        (ind < number_of_repos_to_show || ind === -1) && (
          <RepoCard key={ind} repo={repo} {...this.props} />
        )
    );
  };

  render() {
    const { repos } = this.props;
    return <div className="repolist">{this.filterRepositories(repos)}</div>;
  }
}

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: null,
    };
  }

  componentDidMount() {
    const { github_username, repo_endpoint_parameter } = content;

    // Fetches user's repositories.
    fetch(
      `https://api.github.com/users/${github_username}/repos?${repo_endpoint_parameter}`
    )
      .then((response) => response.json())
      .then((result) => this.setState({ repos: result }));
  }

  render() {
    const { repos } = this.state;
    return repos == null ? (
      <div className="orbit">loading....</div>
    ) : (
      <ErrorBoundary>
        <div className="project-container" id="projects">
          <div className="scroller" id="scroller">
            {/* <div className="title" id="title">
              {content.title}
            </div> */}
            <Repos repos={repos} {...this.props} />
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}

export default Projects;
