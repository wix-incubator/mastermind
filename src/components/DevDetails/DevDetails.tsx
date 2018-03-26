import * as React from 'react';
import * as classnames from 'classnames';
import { IDev } from '../../types/dev';
import Tooltip from 'react-tooltip-lite';
const styles = require('./DevDetails.scss');

export default class DevDetails extends React.PureComponent<IDev> {
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
      <Tooltip content={tooltipContent}>
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
    const { html_url, blog } = this.props;
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

  render() {
    const { avatar_url, name, bio } = this.props;

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
        </div>
      </div>
    );
  }
}
