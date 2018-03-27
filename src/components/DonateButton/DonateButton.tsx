import * as React from 'react';
import { Tooltip } from 'react-tippy';
import Button from '../Button/Button';
import DonateTooltip from '../DonateTooltip/DonateTooltip';

export default class DonateButton extends React.PureComponent {
  render() {
    return (
      <Tooltip html={<DonateTooltip />} arrow interactive>
        <Button>Donate</Button>
      </Tooltip>
    );
  }
}
