import * as React from 'react';
import { Link } from 'react-router-dom';
const styles = require('./Header.scss');

export default class Header extends React.PureComponent {
  render() {
    return (
      <div className={styles.outerHeaderContainer}>
        <div className={styles.innerHeaderContainer}>
          <Link to="/" className={styles.header}>
            MASTERMIND
          </Link>
        </div>
      </div>
    );
  }
}
