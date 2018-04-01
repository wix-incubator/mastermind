import * as React from 'react';
import * as classnames from 'classnames';
const styles = require('./Button.scss');

interface IProps {
  children: string | JSX.Element;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default class Button extends React.PureComponent<IProps> {
  public static defaultProps: Partial<IProps> = {
    disabled: false
  };

  render() {
    const { className, children, onClick, disabled } = this.props;

    return (
      <div
        className={classnames(styles.buttonContainer, className, {
          [styles.disabled]: disabled
        })}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }
}
