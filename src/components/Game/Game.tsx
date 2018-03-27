import * as React from 'react';
import GameDetails from '../GameDetails/GameDetails';
import { IGame } from '../../types/game';
import GameHeader from '../GameHeader/GameHeader';
const styles = require('./Game.scss');

export default class Game extends React.PureComponent<IGame> {
  render() {
    return (
      <React.Fragment>
        <div className={styles.gameContainer}>
          <img
            className={styles.game}
            src={
              'https://raw.githubusercontent.com/wix-incubator/mastermind/master/public/doom.png'
            }
          />
        </div>
        <GameHeader />
        <GameDetails {...this.props} />
      </React.Fragment>
    );
  }
}
