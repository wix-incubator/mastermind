import * as React from 'react';
import Button from '../Button/Button';
const paypal = require('../../assets/images/paypal.svg');
const patreon = require('../../assets/images/patreon.svg');
const styles = require('./DonateTooltip.scss');

export default class DonateTooltip extends React.PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <Button className={styles.paypalButton}>
          <img src={paypal} width={60} className={styles.paypal} />
        </Button>
        <Button className={styles.patreonButton}>
          <img src={patreon} width={67} />
        </Button>
      </div>
    );
  }
}
