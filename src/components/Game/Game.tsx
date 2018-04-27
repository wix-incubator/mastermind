import * as React from 'react';
import GameDetails from '../GameDetails/GameDetails';
import { IGame } from '../../types/game';
import GameHeaderContainer from '../GameHeader/GameHeader.container';
import Spinner from '../Spinner/Spinner';
const styles = require('./Game.scss');

export default class Game extends React.PureComponent<IGame> {
  renderContent() {
    return (
      <React.Fragment>
        <div className={styles.gameContainer}>
          <img className={styles.game} src={this.props.imageUrl} />
        </div>
        <GameHeaderContainer game={this.props} />
        <GameDetails {...this.props} />
      </React.Fragment>
    );
  }

  renderContentOrSpinner() {
    if (this.props.gameName) {
      return this.renderContent();
    }

    return (
      <div className={styles.spinnerContainer}>
        <Spinner />
        <span className={styles.loadingText}>Loading game...</span>
      </div>
    );
  }
  render() {
    return <React.Fragment>{this.renderContentOrSpinner()}</React.Fragment>;
  }
}
