import * as React from 'react';
import Button from '../Button/Button';
const paypal = require('../../assets/images/paypal.svg');
const patreon = require('../../assets/images/patreon.svg');
const styles = require('./DonateTooltip.scss');

interface IProps {
  paypalUsername?: string;
  patreonUsername?: string;
}

export default class DonateTooltip extends React.PureComponent<IProps> {
  private paypalForm: any;

  constructor(props: IProps) {
    super(props);
    this.paypalForm = React.createRef();
  }

  submitPaypalForm = (): void => {
    this.paypalForm.current.submit();
  };

  renderPaypalElements(): JSX.Element | null {
    const { paypalUsername } = this.props;

    if (!paypalUsername) {
      return null;
    }

    return (
      <React.Fragment>
        <form
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          target="_blank"
          ref={this.paypalForm}
          className={styles.paypalForm}
        >
          <input type="hidden" name="business" value={paypalUsername} />
          <input type="hidden" name="cmd" value="_donations" />
          <input type="hidden" name="item_name" value="MASTERMIND" />
          <input
            type="hidden"
            name="item_number"
            value="Keep making awesome games!"
          />
          <input type="hidden" name="currency_code" value="USD" />
        </form>
        <Button className={styles.paypalButton} onClick={this.submitPaypalForm}>
          <img src={paypal} width={60} className={styles.paypal} />
        </Button>
      </React.Fragment>
    );
  }

  renderPatreonElements(): JSX.Element | null {
    const { patreonUsername } = this.props;

    if (!patreonUsername) {
      return null;
    }

    return (
      <Button className={styles.patreonButton}>
        <a
          href={`https://www.patreon.com/bePatron?c=${patreonUsername}`}
          target="_blank"
          className={styles.patreonLink}
        >
          <img src={patreon} width={67} />
        </a>
      </Button>
    );
  }

  render(): JSX.Element {
    return (
      <div className={styles.container}>
        {this.renderPaypalElements()}
        {this.renderPatreonElements()}
      </div>
    );
  }
}
