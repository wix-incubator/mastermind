import * as React from 'react';
const styles = require('./DetailHeader.scss');

const { container, text } = styles;

interface IProps {
  text: string;
}

export default class DetailHeader extends React.PureComponent<IProps> {
  render() {
    return (
      <div className={container}>
        <span className={text}>{this.props.text}</span>
      </div>
    );
  }
}
