import * as React from 'react';
import Header from '../Header/Header';
import GameContainer from '../Game/Game.container';
const styles = require('./Layout.scss');

export default class Layout extends React.PureComponent {
  render() {
    return (
      <div className={styles.layoutContainer}>
        <Header />
        <GameContainer id={'1a2b3c'} />
      </div>
    );
  }
}
