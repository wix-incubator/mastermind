import * as React from 'react';
import GameDetails from '../GameDetails/GameDetails';
import { IGame } from '../../types/game';
import GameHeaderContainer from '../GameHeader/GameHeader.container';
import Spinner from '../Spinner/Spinner';
import Button from '../Button/Button';
import { scrollToGameDetails } from '../../utilities/scrollToElement';
import * as classnames from 'classnames';
const styles = require('./Game.scss');

interface IGameState {
  loadingGame: boolean;
  gameLoaded: boolean;
}

export default class Game extends React.PureComponent<IGame, IGameState> {
  constructor(props: IGame) {
    super(props);
    this.state = {
      loadingGame: false,
      gameLoaded: false
    };
  }

  startGame = () => {
    // window.addEventListener('message', this.gameLoaded);
    this.setState({ loadingGame: true });
  };

  // gameLoaded = (event: any) => {
  //   const { url } = this.props;

  //   if (event.origin === url && event.message === 'gameLoaded') {
  //     window.removeEventListener('message', this.gameLoaded);
  //     this.setState({
  //       loadingGame: false,
  //       gameLoaded: true
  //     });
  //   }
  // };

  renderGameImageOrSpinner() {
    const { loadingGame, gameLoaded } = this.state;
    const { imageUrl, url } = this.props;

    if (loadingGame || gameLoaded) {
      return (
        <React.Fragment>
          <iframe
            className={classnames(styles.gameFrame, {
              [styles.gameFrameLoaded]: gameLoaded
            })}
            src={url}
          />
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <img className={styles.game} src={imageUrl} />
        <div className={styles.gameControls}>
          <div className={styles.buttonsContainer}>
            <Button onClick={this.startGame}>Play</Button>
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
      </React.Fragment>
    );
  }

  renderContent() {
    return (
      <React.Fragment>
        <div className={styles.gameContainer}>
          <div className={styles.gameWrapper}>
            {this.renderGameImageOrSpinner()}
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
