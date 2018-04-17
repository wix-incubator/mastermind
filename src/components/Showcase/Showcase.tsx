import * as React from 'react';
const styles = require('./Showcase.scss');

export default class Showcase extends React.PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <span className={styles.title}>Our latest games</span>
      </div>
    );
  }
}
