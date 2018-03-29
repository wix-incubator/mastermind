import * as React from 'react';
const styles = require('./Footer.scss');

export default class Footer extends React.PureComponent {
  render() {
    return (
      <div className={styles.outerFooter}>
        <div className={styles.innerFooter}>
          <span>MASTERMIND.com</span>
          <span>2018</span>
        </div>
      </div>
    );
  }
}
