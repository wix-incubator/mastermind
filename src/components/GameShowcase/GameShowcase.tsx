import * as React from 'react';
import { IGame } from '../../types/game';
import { generateDevProfileUrl } from '../../utilities/githubUrls';
import { getGamePath } from '../../utilities/routes';
import { Link } from 'react-router-dom';
import * as classnames from 'classnames';
const styles = require('./GameShowcase.scss');

interface IProps {
  game: IGame;
  inSearch?: boolean;
}

export default class GameShowcase extends React.PureComponent<IProps> {
  render() {
    const {
      inSearch,
      game: { thumbnailUrl, developerName, developerGithubId, gameName, id }
    } = this.props;

    return (
      <div
        className={classnames(styles.container, {
          [styles.inSearch]: inSearch
        })}
      >
        <Link to={getGamePath(id)}>
          <img src={thumbnailUrl} className={styles.thumbnail} />
        </Link>
        <span className={styles.gameName}>{gameName}</span>
        <span className={styles.devNameContainer}>
          <span>by</span>
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
