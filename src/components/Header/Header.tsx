import * as React from 'react';
const styles = require('./Header.scss');

export default class Header extends React.PureComponent {
  render() {
    return (
      <div className={styles.outerHeaderContainer}>
        <div className={styles.innerHeaderContainer}>
          <span className={styles.header}>MASTERMIND</span>
        </div>
      </div>
    );
  }
}
