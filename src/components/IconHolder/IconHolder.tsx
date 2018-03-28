import * as React from 'react';
const styles = require('./IconHolder.scss');

interface IProps {
  children: JSX.Element;
}

export default class IconHolder extends React.PureComponent<IProps> {
  render() {
    return <div className={styles.iconHolder}>{this.props.children}</div>;
  }
}
