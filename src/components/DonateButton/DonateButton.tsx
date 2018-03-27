import * as React from 'react';
import { Tooltip } from 'react-tippy';
import Button from '../Button/Button';
import DonateTooltip from '../DonateTooltip/DonateTooltip';

interface IProps {
  paypalUsername?: string;
  patreonUsername?: string;
}

export default class DonateButton extends React.PureComponent<IProps> {
  render(): JSX.Element {
    return (
      <Tooltip html={<DonateTooltip {...this.props} />} arrow interactive>
        <Button>Donate</Button>
      </Tooltip>
    );
  }
}
