import React, {Component} from "react";
import { GitHub, ExternalLinkSymbol, Doc, Star, Fork } from "./socialmedia/logos";
import content from "./content.json";

class LanguagesContainer extends Component {
  render() {
    const { langColors, languages } = this.props;

    let langSum = 0;
    for (let lang in languages) {
      langSum += languages[lang];
    }

    const finalizedLangs = [];
    let ind = 0;
    for (let lang in languages) {
      const size = languages[lang];
      langSum += size;
      // language is shown only if its size exceeds a certain threshold.
      if (size / langSum > content.language_threshold) {
        finalizedLangs.push(
          <div key={ind} style={{ color: `${langColors[lang]}` }} className="language" >
            {lang}
          </div>
        );
      }
      ind++;
    }
    return <div className="languages">{finalizedLangs}</div>;
  }
}

export default class RepoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: {},
    };
  }

  componentDidMount() {
    const { repo } = this.props;
    fetch(repo.languages_url)
      .then((resp) => resp.json())
      .then((languages) => {
        this.props.updateLanguages(languages);
        this.props.updateTop3Languages();
        this.setState({ languages: languages });
      });
  }

  render() {
    const { repo, langColors } = this.props;
    const { languages } = this.state;
    const { html_url, homepage } = repo;
    return (
      <div className="card">
        <div className="card-wrapper">
          <div className="top">
            <Doc />
            <div className="flexrow">
              {html_url && <GitHub urlToUse={html_url} />}
              {homepage && <ExternalLinkSymbol urlToUse={homepage} />}
            </div>
          </div>

          <div className="name">{repo.name}</div>
          <div className="desc">{repo.description}</div>

          <div className="bottom">
            <div className="flex-between">
              <div className="size">{repo.size.toLocaleString()} KB</div>
              <div className="flex-row">
                <div className="stars">
                  <Star />
                  &nbsp;{repo.stargazers_count}
                </div>
                <div className="forks">
                  <Fork />
                  &nbsp;{repo.forks_count}
                </div>
              </div>
            </div>
            <LanguagesContainer languages={languages} langColors={langColors} />
          </div>
        </div>
      </div>
    );
  }
}
