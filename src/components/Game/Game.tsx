import * as React from 'react';
const styles = require('./Game.scss');

export default class Game extends React.PureComponent {
  render() {
    return (
      <div className={styles.gameContainer}>
        <div className={styles.game} />
      </div>
    );
  }
}
