import * as React from 'react';
import { IGame } from '../../types/game';
import GameShowcaseContainer from '../GameShowcase/GameShowcase.container';
const styles = require('./Showcase.scss');

interface IProps {
  games: { [key: string]: IGame };
}

export default class Showcase extends React.PureComponent<IProps> {
  renderGameShowcases(): JSX.Element[] {
    const { games } = this.props;
    return Object.keys(games)
      .slice(0, 3)
      .map(id => {
        const game = games[id];
        return <GameShowcaseContainer key={game.id} game={game} />;
      });
  }

  render() {
    return (
      <div className={styles.outerShowcaseContainer}>
        <div className={styles.innerShowcaseContainer}>
          <span className={styles.title}>Our latest games</span>
          <div className={styles.showcasesContainer}>
            {this.renderGameShowcases()}
          </div>
        </div>
      </div>
    );
  }
}
