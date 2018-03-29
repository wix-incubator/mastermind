import * as React from 'react';
import { IGame } from '../../types/game';
import DetailHeader from '../DetailHeader/DetailHeader';
import TechsContainer from '../Techs/Techs.container';
import DevDetailsContainer from '../DevDetails/DevDetails.container';
import KeyPointsOfInterestContainer from '../KeyPointsOfInterest/KeyPointsOfInterest.container';
const styles = require('./GameDetails.scss');

const { outerGameDetails, innerGameDetails, leftSide, text } = styles;

export default class GameDetails extends React.PureComponent<IGame> {
  render() {
    const {
      id,
      description,
      techIds,
      keyPointsOfInterestUrl,
      developerGithubId,
      patreonUsername,
      paypalUsername
    } = this.props;

    return (
      <div id="gameDetails" className={outerGameDetails}>
        <div className={innerGameDetails}>
          <div className={leftSide}>
            <DetailHeader text={'About Game'} />
            <p className={text}>{description}</p>
            <DetailHeader text={'Technologies Used'} />
            <TechsContainer techIds={techIds} />
            <DetailHeader text={'Key Points Of Interest'} />
            <KeyPointsOfInterestContainer
              id={id}
              url={keyPointsOfInterestUrl}
            />
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
