import * as React from 'react';
import { Tooltip } from 'react-tippy';
import Button from '../Button/Button';
import DonateTooltip from '../DonateTooltip/DonateTooltip';

interface IProps {
  paypalUsername?: string;
  patreonUsername?: string;
  className?: string;
  style?: { [key: string]: any };
  disabled?: boolean;
}

export default class DonateButton extends React.PureComponent<IProps> {
  public static defaultProps: Partial<IProps> = {
    disabled: false
  };

  render(): JSX.Element {
    const { className, style, disabled } = this.props;

    return (
      <Tooltip
        html={<DonateTooltip {...this.props} />}
        arrow
        interactive
        style={style}
        disabled={disabled}
      >
        <Button className={className}>Donate</Button>
      </Tooltip>
    );
  }
}
