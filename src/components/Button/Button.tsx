import * as React from 'react';
import * as classnames from 'classnames';
const styles = require('./Button.scss');

interface IProps {
  children: string | JSX.Element;
  className?: string;
}

export default class Button extends React.Component<IProps> {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { className, children } = this.props;

    return (
      <div className={classnames(styles.buttonContainer, className)}>
        {children}
      </div>
    );
  }
}
