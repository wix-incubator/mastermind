import * as React from 'react';
import * as classnames from 'classnames';
import { IDev } from '../../types/dev';
import { Tooltip } from 'react-tippy';
import DonateButton from '../DonateButton/DonateButton';

const styles = require('./DevDetails.scss');

interface IProps {
  dev: IDev;
  paypalUsername?: string;
  patreonUsername?: string;
}

export default class DevDetails extends React.PureComponent<IProps> {
  public static defaultProps: Partial<IProps> = {
    dev: {} as IDev
  };

  renderSocialLink({
    url,
    iconName,
    tooltipContent
  }: {
    url: string;
    iconName: string;
    tooltipContent: string;
  }) {
    return (
      <Tooltip title={tooltipContent} arrow>
        <a className={styles.socialLink} href={url} target="_blank">
          <i
            className={classnames(
              `devicon-${iconName}-plain`,
              styles.socialIcon
            )}
          />
        </a>
      </Tooltip>
    );
  }

  renderSocialLinks() {
    const { html_url, blog } = this.props.dev;
    const isTwitter = blog.match(/twitter/);

    return (
      <React.Fragment>
        {this.renderSocialLink({
          url: html_url,
          iconName: 'github',
          tooltipContent: 'Github'
        })}
        {this.renderSocialLink({
          url: blog,
          iconName: isTwitter ? 'twitter' : 'devicon',
          tooltipContent: isTwitter ? 'Twitter' : 'Blog'
        })}
      </React.Fragment>
    );
  }

  renderDonateButton() {
    const { paypalUsername, patreonUsername } = this.props;

    if (paypalUsername || patreonUsername) {
      return (
        <DonateButton
          paypalUsername={paypalUsername}
          patreonUsername={patreonUsername}
        />
      );
    }

    return null;
  }

  render() {
    const { avatar_url, name, bio } = this.props.dev;

    if (!name) {
      return null;
    }

    return (
      <div>
        <div className={styles.container}>
          <img className={styles.avatar} src={avatar_url} />
          <span className={styles.name}>{name}</span>
          <div className={styles.socialLinksContainer}>
            {this.renderSocialLinks()}
          </div>
          <p className={styles.bio}>{bio}</p>
          {this.renderDonateButton()}
        </div>
      </div>
    );
  }
}
