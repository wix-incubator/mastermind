import * as React from 'react';
import GameDetails from '../GameDetails/GameDetails';
import { IGame } from '../../types/game';
const styles = require('./Game.scss');

export default class Game extends React.PureComponent<IGame> {
  render() {
    return (
      <React.Fragment>
        <div className={styles.gameContainer}>
          <div className={styles.game} />
        </div>
        <GameDetails {...this.props} />
      </React.Fragment>
    );
  }
}
