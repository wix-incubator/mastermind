import * as React from 'react';
import { IGame } from '../../types/game';
import DetailHeader from '../DetailHeader/DetailHeader';
import TechsContainer from '../Techs/Techs.container';
import DevDetailsContainer from '../DevDetails/DevDetails.container';
const styles = require('./GameDetails.scss');

export default class GameDetails extends React.PureComponent<IGame> {
  render() {
    const {
      description,
      techIds,
      keyPointsOfInterest,
      developerGithubId,
      patreonUsername,
      paypalUsername
    } = this.props;

    return (
      <div className={styles.outerGameDetails}>
        <div className={styles.innerGameDetails}>
          <div className={styles.leftSide}>
            <DetailHeader text={'About Game'} />
            <p className={styles.text}>{description}</p>
            <DetailHeader text={'Technologies Used'} />
            <TechsContainer techIds={techIds} />
            <DetailHeader text={'Key Points Of Interest'} />
            <p className={styles.text}>{keyPointsOfInterest}</p>
          </div>
          <DevDetailsContainer
            developerGithubId={developerGithubId}
            patreonUsername={patreonUsername}
            paypalUsername={paypalUsername}
          />
        </div>
      </div>
    );
  }
}
