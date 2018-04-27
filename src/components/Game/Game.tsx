import * as React from 'react';
import GameDetails from '../GameDetails/GameDetails';
import { IGame } from '../../types/game';
import GameHeaderContainer from '../GameHeader/GameHeader.container';
import Spinner from '../Spinner/Spinner';
import Button from '../Button/Button';
import { scrollToGameDetails } from '../../utilities/scrollToElement';
const styles = require('./Game.scss');

export default class Game extends React.PureComponent<IGame> {
  renderContent() {
    return (
      <React.Fragment>
        <div className={styles.gameContainer}>
          <div className={styles.gameWrapper}>
            <img className={styles.game} src={this.props.imageUrl} />
            <div className={styles.gameControls}>
              <div className={styles.buttonsContainer}>
                <Button>Play</Button>
                <Button
                  className={styles.aboutGameButton}
                  onClick={scrollToGameDetails}
                >
                  <React.Fragment>
                    <span>About Game</span>
                    <div className={styles.triangle} />
                  </React.Fragment>
                </Button>
              </div>
            </div>
          </div>
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
