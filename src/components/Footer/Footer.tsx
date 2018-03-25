import * as React from 'react';
const styles = require('./Footer.scss');

export default class Footer extends React.PureComponent {
  render() {
    return (
      <div className={styles.footer}>
        <span>FOOTER</span>
      </div>
    );
  }
}
