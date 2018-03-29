import * as React from 'react';
import * as classnames from 'classnames';
const styles = require('./Button.scss');

interface IProps {
  children: string | JSX.Element;
  className?: string;
  onClick?: () => void;
}

export default class Button extends React.PureComponent<IProps> {
  render() {
    const { className, children, onClick } = this.props;

    return (
      <div
        className={classnames(styles.buttonContainer, className)}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }
}
