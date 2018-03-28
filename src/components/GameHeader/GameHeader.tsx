import * as React from 'react';
import Star from '../Star/Star';
import IconHolder from '../IconHolder/IconHolder';
import DonateButton from '../DonateButton/DonateButton';
import { Tooltip } from 'react-tippy';
import ShareTooltip from '../ShareTooltip/ShareTooltip';
const share = require('../../assets/images/share.svg');
const megaphone = require('../../assets/images/megaphone.svg');
const styles = require('./GameHeader.scss');
const starArray = [1, 2, 3, 4, 5];

interface IProps {
  gameName: string;
  name: string;
  createdDate: string;
  rating?: number;
  paypalUsername?: string;
  patreonUsername?: string;
}

export default class GameHeader extends React.PureComponent<IProps> {
  renderStars() {
    const { rating } = this.props;
    return starArray.map(num => {
      return <Star key={num} highlighted={num <= (rating || 0)} />;
    });
  }

  renderShareButton() {
    return (
      <Tooltip
        interactive
        arrow
        style={{ marginRight: 22 }}
        html={<ShareTooltip />}
      >
        <IconHolder>
          <img src={share} className={styles.shareIcon} />
        </IconHolder>
      </Tooltip>
    );
  }

  render(): JSX.Element {
    const {
      gameName,
      name,
      createdDate,
      paypalUsername,
      patreonUsername
    } = this.props;

    return (
      <div className={styles.outerGameHeader}>
        <div className={styles.innerGameHeader}>
          <div className={styles.leftSide}>
            <span className={styles.gameName}>{gameName}</span>
            <div className={styles.text}>
              <span>By</span>
              <a href="#devStuff" className={styles.devLink}>
                {name}
              </a>
              <span>{`on ${createdDate}`}</span>
            </div>
            <div className={styles.text}>
              <span>Rating:</span>
              {this.renderStars()}
            </div>
          </div>
          <div className={styles.rightSide}>
            {this.renderShareButton()}
            <Tooltip title={'Feedback'} arrow style={{ marginRight: 22 }}>
              <IconHolder>
                <img src={megaphone} className={styles.megaphoneIcon} />
              </IconHolder>
            </Tooltip>
            <DonateButton
              paypalUsername={paypalUsername}
              patreonUsername={patreonUsername}
              className={styles.donateButtonText}
            />
          </div>
        </div>
      </div>
    );
  }
}
