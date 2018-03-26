import * as React from 'react';
const styles = require('./Button.scss');

interface IProps {
  children: string;
}

export default class Button extends React.Component<IProps> {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <div className={styles.buttonContainer}>{this.props.children}</div>;
  }
}
