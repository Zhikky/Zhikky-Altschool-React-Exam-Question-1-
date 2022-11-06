import React, { Component } from "react";
import content from "./content.json";
import RepoCard from "./repositorycards";
import { ErrorBoundary } from "./ErrorBoundary/ErrorBoundary";
import { FaRegSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

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

function handleThemeDark() {
  const text = document.getElementById("container");
  text.style.backgroundColor = "rgb(39, 48, 72)";
  text.style.color = "white";
  
}

function handleThemeLight() {
  const text = document.getElementById("container");
  text.style.backgroundColor = "white";
  text.style.color = "rgb(39, 48, 72)";
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
      <div className="loading-message">Loading...</div>
    ) : (
      <ErrorBoundary>
        <div className="project-container">
          <div className="scroller" id="scroller">
            <div className="title" id="title">
              {content.title}
              <div className="themechange">
                <button onClick={handleThemeLight} className="theme" id="theme">
                  <FaRegSun />
                </button>
                <button onClick={handleThemeDark} className="theme" id="theme">
                  <FaMoon />
                </button>
              </div>
            </div>
            <Repos repos={repos} {...this.props} />
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}

export default Projects;
