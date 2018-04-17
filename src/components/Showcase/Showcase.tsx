import * as React from 'react';
import { IGame } from '../../types/game';
import GameShowcase from '../GameShowcase/GameShowcase';
const styles = require('./Showcase.scss');

interface IProps {
  games: { [key: string]: IGame };
}

export default class Showcase extends React.PureComponent<IProps> {
  renderGameShowcases(): JSX.Element[] {
    const { games } = this.props;
    return Object.keys(games).map(id => {
      const game = games[id];
      return <GameShowcase key={game.id} {...game} />;
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <span className={styles.title}>Our latest games</span>
        <div className={styles.showcasesContainer}>
          {this.renderGameShowcases()}
        </div>
      </div>
    );
  }
}
