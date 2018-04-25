import * as React from 'react';
import { IGame } from '../../types/game';
import { generateDevProfileUrl } from '../../utilities/githubUrls';
import * as classnames from 'classnames';
import { clickOnCancelButton } from '../../utilities/clickOnCancelButton';
const styles = require('./GameShowcase.scss');

interface IProps {
  game: IGame;
  inSearch?: boolean;
  navigateToGame: (id: string) => any;
}

export default class GameShowcase extends React.PureComponent<IProps> {
  handleClick = () => {
    const { navigateToGame, game: { id } } = this.props;
    clickOnCancelButton();
    navigateToGame(id);
  };

  render() {
    const {
      inSearch,
      game: { thumbnailUrl, developerName, developerGithubId, gameName }
    } = this.props;

    return (
      <div
        className={classnames(styles.container, {
          [styles.inSearch]: inSearch
        })}
      >
        <img
          src={thumbnailUrl}
          className={styles.thumbnail}
          onClick={this.handleClick}
        />
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
