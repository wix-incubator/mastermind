import * as React from 'react';
import * as classnames from 'classnames';
const styles = require('./Star.scss');

interface IProps {
  highlighted: boolean;
}

export default class Star extends React.PureComponent<IProps> {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className={classnames(styles.star, {
          [styles.highlighted]: this.props.highlighted
        })}
      >
        <path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" />
      </svg>
    );
  }
}