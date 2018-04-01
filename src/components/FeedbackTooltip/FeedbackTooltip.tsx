import * as React from 'react';
const email = require('../../assets/images/email.svg');
const styles = require('./FeedbackTooltip.scss');

const { container, emailIcon, githubLink } = styles;

interface IProps {
  githubUrl: string;
  onEmailClick: () => void;
}

export default class FeedbackTooltip extends React.PureComponent<IProps> {
  render() {
    return (
      <div className={container}>
        <img
          onClick={this.props.onEmailClick}
          src={email}
          className={emailIcon}
        />
        <a
          href={`${this.props.githubUrl}/issues`}
          className={githubLink}
          target="_blank"
        >
          <i className={'devicon-github-plain'} />
        </a>
      </div>
    );
  }
}
