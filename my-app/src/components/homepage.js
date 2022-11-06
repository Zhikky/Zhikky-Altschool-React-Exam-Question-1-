import React, {Component} from "react";
import { GitHub, LinkedIn, Twitter } from "./socialmedia/logos";
import content from "./content.json"
import Projects from "./displayprojects";
import { ErrorBoundary } from "./ErrorBoundary/ErrorBoundary";

class Homepage extends Component {
  // constructor method, props is the arguments passed to the component.
  constructor(props) {
    super(props);
    this.languages = {};

    // leveraging state.
    this.state = {
      langColors: [],
      user: null,
      topLang: [],
    };
  }

  // componentDidMount is invoked immediately after a component is mounted (inserted into the DOM tree).
  componentDidMount() {
    // fetching user data used to display projects
    fetch(`https://api.github.com/users/${content.github_username}`)
      .then((response) => response.json())
      .then((result) => {
        this.setState({ user: result });
        this.setState({ langColors: result });
        document.title = `${result.name}'s Portfolio`;
      });

    fetch(
      "https://raw.githubusercontent.com/Diastro/github-colors/master/github-colors.json"
    )
      .then(function (response) {
        return response.json();
      })

      .then(function (myJson) {
        console.log(JSON.stringify(myJson));
      });
  }

  render() {
    const { langColors, user, topLang } = this.state;
    const { github_username, number_of_languages_to_show, emojis } = content;
    return user == null ? (
      
      <div className="loadingmessage">Loading...</div>
    ) : (
      <ErrorBoundary>
      <div className="container" id="container">
        <div className="topbar">
          <div className="topbar-wrapper">
            <div className="user">
              <div className="image-container">
                <img
                  src={user.avatar_url}
                  className="br-100 pa1 ba b--black-10 h3 w3"
                  alt="avatar"
                />
              </div>
              <div className="userinfo">
                <span>{user.name}</span>
                <span className="f6 font-ubuntu-mono">&nbsp;@ &nbsp;</span>
                <span className="f6 font-ubuntu-mono">{user.login}</span>
              </div>
            </div>
            <div className="languages">
              {topLang
                .slice(0, number_of_languages_to_show)
                .map((lang, ind) => (
                  <div className="language"
                    key={ind}
                    style={{ color: `${langColors[lang[0]]}` }}
                  >
                    <img src={emojis[ind]} alt=""/>
                    {lang[0]}
                  </div>
                ))}
            </div>
            <div className="socialmedia">
              <GitHub urlToUse={`https://github.com/${github_username}`} />
              {user.blog.includes("linkedin.com") && (
                <LinkedIn urlToUse={user.blog} />
              )}
              {user.blog.includes("twitter.com") && (
                <Twitter urlToUse={user.blog} />
              )}
            </div>
          </div>
        </div>
        <Projects/>
      </div>
      </ErrorBoundary>
    );
  }
}

export default Homepage;
