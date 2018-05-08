import * as React from 'react';
import GameDetails from '../GameDetails/GameDetails';
import { IGame } from '../../types/game';
import GameHeaderContainer from '../GameHeader/GameHeader.container';
import Spinner from '../Spinner/Spinner';
import Button from '../Button/Button';
import {
  scrollToGameDetails,
  scrollToTop
} from '../../utilities/scrollToElement';
import * as classnames from 'classnames';
const styles = require('./Game.scss');
const fullscreenIcon = require('../../assets/images/fullscreen-on.svg');

interface IGameState {
  loadingGame: boolean;
  gameLoaded: boolean;
}

interface IProps extends IGame {
  inFullScreen: boolean;
  toggleCurrentGameInFullScreen: () => any;
}

export default class Game extends React.PureComponent<IProps, IGameState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      loadingGame: false,
      gameLoaded: false
    };
  }

  startGame = () => {
    window.addEventListener('message', this.gameLoaded);
    this.setState({ loadingGame: true });
  };

  gameLoaded = (event: any) => {
    // const { url } = this.props;

    // if (url.match(event.origin) && event.data === 'gameLoaded') {
    window.removeEventListener('message', this.gameLoaded);
    this.setState({
      loadingGame: false,
      gameLoaded: true
    });
    // }
  };

  handleScreenModeToggle = () => {
    if (this.props.inFullScreen) {
      document.getElementsByTagName('body')[0].className = '';
      this.props.toggleCurrentGameInFullScreen();
    } else {
      const duration = window.scrollY < 100 ? 0 : 800;
      scrollToTop({ duration }).then(() => {
        document.getElementsByTagName('body')[0].className = 'preventScrolling';
        this.props.toggleCurrentGameInFullScreen();
      });
    }
  };

  renderFullScreenToggle(): JSX.Element | null {
    if (!this.state.gameLoaded || this.props.inFullScreen) {
      return null;
    }

    return (
      <div
        onClick={this.handleScreenModeToggle}
        className={styles.fullScreenText}
      >
        Play fullscreen
        <img className={styles.fullscreenIcon} src={fullscreenIcon} />
      </div>
    );
  }

  renderGameImageOrSpinner() {
    const { loadingGame, gameLoaded } = this.state;
    const { imageUrl, url } = this.props;

    if (loadingGame || gameLoaded) {
      return (
        <React.Fragment>
          {loadingGame && <Spinner />}
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
          <div
            className={classnames(styles.gameWrapper, {
              [styles.inFullScreen]: this.props.inFullScreen
            })}
          >
            {this.renderGameImageOrSpinner()}
            {this.renderFullScreenToggle()}
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
