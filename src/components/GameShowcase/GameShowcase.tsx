import * as React from 'react';
import { IGame } from '../../types/game';
import { generateDevUrl } from '../../utilities/githubUrls';
const styles = require('./GameShowcase.scss');

export default class GameShowcase extends React.PureComponent<IGame> {
  render() {
    const {
      thumbnailUrl,
      developerName,
      developerGithubId,
      gameName
    } = this.props;

    return (
      <div className={styles.container}>
        <img src={thumbnailUrl} className={styles.thumbnail} />
        <span className={styles.gameName}>{gameName}</span>
        <span>
          <span className={styles.by}>By</span>
          <a href={generateDevUrl(developerGithubId)}>{developerName}</a>
        </span>
      </div>
    );
  }
}
