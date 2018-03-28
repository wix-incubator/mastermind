import * as React from 'react';
import {
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton
} from 'react-share';
const styles = require('./ShareTooltip.scss');

export default class ShareTooltip extends React.PureComponent {
  render() {
    const url = window.location.href;
    return (
      <div className={styles.container}>
        <FacebookShareButton
          url={url}
          quote={'Check out this awesome game I found on MASTERMIND'}
          hashtag={'#mastermind'}
        >
          <FacebookIcon size={36} round />
        </FacebookShareButton>
        <TwitterShareButton
          url={url}
          title={'Check out this awesome game I found on MASTERMIND'}
          hashtags={['mastermind', 'games']}
        >
          <TwitterIcon size={36} round />
        </TwitterShareButton>
        <WhatsappShareButton url={url} title={'MASTERMIND'}>
          <WhatsappIcon size={36} round />
        </WhatsappShareButton>
      </div>
    );
  }
}
