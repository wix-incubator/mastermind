import * as React from 'react';
import Star from '../Star/Star';
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

  render(): JSX.Element {
    const { gameName, name, createdDate } = this.props;

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
          <div className={styles.rightSite} />
        </div>
      </div>
    );
  }
}
