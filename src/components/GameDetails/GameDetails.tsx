import * as React from 'react';
const styles = require('./GameDetails.scss');

export default class GameDetails extends React.PureComponent {
  render() {
    return (
      <div className={styles.gameDetailsContainer}>
        <span>DOOM Minesweeper</span>
      </div>
    );
  }
}
