import * as React from 'react';
import * as classnames from 'classnames';
import { IDev } from '../../types/dev';
import { Tooltip } from 'react-tippy';
import DonateButton from '../DonateButton/DonateButton';
const flag = require('../../assets/images/flag.svg');
const styles = require('./DevDetails.scss');

const {
  container,
  avatar,
  devName,
  socialLinksContainer,
  bioText,
  reportIssue,
  reportFlag,
  socialLink,
  socialIcon
} = styles;

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
        <a className={socialLink} href={url} target="_blank">
          <i className={classnames(`devicon-${iconName}-plain`, socialIcon)} />
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
        <div className={container}>
          <img className={avatar} src={avatar_url} />
          <span className={devName}>{name}</span>
          <div className={socialLinksContainer}>{this.renderSocialLinks()}</div>
          <p className={bioText}>{bio}</p>
          {this.renderDonateButton()}
        </div>
        <div className={reportIssue}>
          <img src={flag} className={reportFlag} />
          Report an issue
        </div>
      </div>
    );
  }
}
