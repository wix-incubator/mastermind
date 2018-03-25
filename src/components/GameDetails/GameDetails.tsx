import * as React from 'react';
import { IGame } from '../../types/game';
import DetailHeader from '../DetailHeader/DetailHeader';
import TechsContainer from '../Techs/Techs.container';
const styles = require('./GameDetails.scss');

export default class GameDetails extends React.PureComponent<IGame> {
  render() {
    return (
      <React.Fragment>
        <div className={styles.gameHeader}>
          <span>DOOM Minesweeper</span>
        </div>
        <div className={styles.details}>
          <DetailHeader text={'About Game'} />
          <p>{this.props.description}</p>
          <TechsContainer techIds={techIds} />
        </div>
      </React.Fragment>
    );
  }
}
