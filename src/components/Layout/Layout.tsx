import * as React from 'react';
import Header from '../Header/Header';
import Game from '../Game/Game';
import GameDetails from '../GameDetails/GameDetails';
const styles = require('./Layout.scss');

export default class Layout extends React.PureComponent {
  render() {
    return (
      <div className={styles.layoutContainer}>
        <Header />
        <Game />
        <GameDetails />
      </div>
    );
  }
}
