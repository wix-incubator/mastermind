import * as React from 'react';
const styles = require('./DetailHeader.scss');

interface IProps {
  text: string;
}

export default class DetailHeader extends React.PureComponent<IProps> {
  render() {
    return (
      <div className={styles.container}>
        <span className={styles.text}>{this.props.text}</span>
      </div>
    );
  }
}
