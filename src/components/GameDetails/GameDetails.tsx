import * as React from 'react';
import { IGame } from '../../types/game';
import DetailHeader from '../DetailHeader/DetailHeader';
import TechsContainer from '../Techs/Techs.container';
const styles = require('./GameDetails.scss');

export default class GameDetails extends React.PureComponent<IGame> {
  render() {
    const { description, techIds, keyPointsOfInterest } = this.props;

    return (
      <React.Fragment>
        <div className={styles.gameHeader}>
          <span>DOOM Minesweeper</span>
        </div>
        <div className={styles.details}>
          <DetailHeader text={'About Game'} />
          <p>{description}</p>
          <TechsContainer techIds={techIds} />
          <DetailHeader text={'Key Points Of Interest'} />
          <p>{keyPointsOfInterest}</p>
        </div>
      </React.Fragment>
    );
  }
}
