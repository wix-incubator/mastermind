import * as React from 'react';
const styles = require('./GameHeader.scss');

export default class GameHeader extends React.PureComponent {
  render() {
    return (
      <div className={styles.outerGameHeader}>
        <div className={styles.innerGameHeader} />
      </div>
    );
  }
}
