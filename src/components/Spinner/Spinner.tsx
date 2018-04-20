import * as React from 'react';
import * as classnames from 'classnames';
const styles = require('./Spinner.scss');

export default class Spinner extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className={styles.container}>
        <div
          className={classnames(styles.cssloadTetromino, styles.cssloadBox1)}
        />
        <div
          className={classnames(styles.cssloadTetromino, styles.cssloadBox2)}
        />
        <div
          className={classnames(styles.cssloadTetromino, styles.cssloadBox3)}
        />
        <div
          className={classnames(styles.cssloadTetromino, styles.cssloadBox4)}
        />
      </div>
    );
  }
}
