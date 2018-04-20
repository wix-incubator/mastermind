import * as React from 'react';
import { IGame } from '../../types/game';
import { generateDevProfileUrl } from '../../utilities/githubUrls';
import { getGamePath } from '../../utilities/routes';
import { Link } from 'react-router-dom';
const styles = require('./GameShowcase.scss');

export default class GameShowcase extends React.PureComponent<IGame> {
  render() {
    const {
      thumbnailUrl,
      developerName,
      developerGithubId,
      gameName,
      id
    } = this.props;

    return (
      <div className={styles.container}>
        <Link to={getGamePath(id)}>
          <img src={thumbnailUrl} className={styles.thumbnail} />
        </Link>
        <span className={styles.gameName}>{gameName}</span>
        <span className={styles.devNameContainer}>
          <span className={styles.by}>By </span>
          <a
            href={generateDevProfileUrl(developerGithubId)}
            className={styles.devName}
            target="_blank"
          >
            {developerName}
          </a>
        </span>
      </div>
    );
  }
}
