import * as React from 'react';
import GameDetails from '../GameDetails/GameDetails';
import { IGame } from '../../types/game';
import GameHeaderContainer from '../GameHeader/GameHeader.container';
const styles = require('./Game.scss');

export default class Game extends React.PureComponent<IGame> {
  render() {
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
}
