import * as React from 'react';
import * as classnames from 'classnames';
import Star from '../Star/Star';
import IconHolder from '../IconHolder/IconHolder';
import DonateButton from '../DonateButton/DonateButton';
import { Tooltip } from 'react-tippy';
import ShareTooltip from '../ShareTooltip/ShareTooltip';
import Button from '../Button/Button';
import scrollToElement from 'scroll-to-element';
import FeedbackTooltip from '../FeedbackTooltip/FeedbackTooltip';
const share = require('../../assets/images/share.svg');
const megaphone = require('../../assets/images/megaphone.svg');
const styles = require('./GameHeader.scss');
const starArray = [1, 2, 3, 4, 5];

interface IProps {
  gameName: string;
  name: string;
  createdDate: string;
  githubUrl: string;
  rating?: number;
  paypalUsername?: string;
  patreonUsername?: string;
  toggleFeedbackModalIsVisible: () => void;
}

interface InnerState {
  collapsed: boolean;
}

export default class GameHeader extends React.PureComponent<
  IProps,
  InnerState
> {
  private headerYOffset: number;
  private header: any;

  constructor(props: IProps) {
    super(props);
    this.header = React.createRef();
    this.state = {
      collapsed: false
    };
  }

  handleScroll = () => {
    const collapsed = window.scrollY - this.headerYOffset > 0;
    this.setState({
      collapsed
    });
  };

  componentDidMount() {
    const headerRef = this.header.current as HTMLDivElement;
    setTimeout(() => {
      this.headerYOffset = headerRef.offsetTop;
      window.addEventListener('scroll', this.handleScroll);
    }, 1000);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  renderStars(): JSX.Element[] {
    const { rating } = this.props;
    return starArray.map(num => {
      return <Star key={num} highlighted={num <= (rating || 0)} />;
    });
  }

  renderShareButton(): JSX.Element {
    const { collapsed } = this.state;

    return (
      <Tooltip
        interactive
        disabled={collapsed}
        arrow
        style={{ marginRight: 12 }}
        html={<ShareTooltip />}
      >
        <IconHolder>
          <img src={share} className={styles.shareIcon} />
        </IconHolder>
      </Tooltip>
    );
  }

  navigateToTop() {
    scrollToElement('#top', { duration: 800 });
  }

  renderDonateOrBackButton(): JSX.Element {
    const { paypalUsername, patreonUsername } = this.props;
    const { collapsed } = this.state;

    return (
      <React.Fragment>
        <Button
          onClick={this.navigateToTop}
          className={classnames(styles.backButton, {
            [styles.hidden]: !collapsed
          })}
        >
          Back To Game
        </Button>
        <DonateButton
          paypalUsername={paypalUsername}
          patreonUsername={patreonUsername}
          className={classnames(styles.donateButton, {
            [styles.hidden]: collapsed
          })}
          style={{ position: 'absolute', right: 0 }}
          disabled={collapsed}
        />
      </React.Fragment>
    );
  }

  navigateToGameDetails() {
    scrollToElement('#gameDetails', {
      duration: 800,
      align: 'top',
      offset: -113
    });
  }

  renderLeftSide(): JSX.Element {
    const { gameName, name, createdDate } = this.props;
    const { collapsed } = this.state;

    return (
      <div className={styles.leftSide}>
        <span
          className={classnames(styles.gameName, {
            [styles.collapsed]: collapsed
          })}
        >
          {gameName}
        </span>
        <div
          className={classnames(styles.text, styles.devContainer, {
            [styles.collapsed]: collapsed
          })}
        >
          <span>by</span>
          <span onClick={this.navigateToGameDetails} className={styles.devLink}>
            {name}
          </span>
          <span>{`on ${createdDate}`}</span>
        </div>
        <div
          className={classnames(styles.text, styles.ratingsContainer, {
            [styles.collapsed]: collapsed
          })}
        >
          <span>Rating:</span>
          {this.renderStars()}
        </div>
      </div>
    );
  }

  renderFeedbackButton() {
    const { collapsed } = this.state;

    return (
      <Tooltip
        arrow
        interactive
        disabled={collapsed}
        html={
          <FeedbackTooltip
            githubUrl={this.props.githubUrl}
            onEmailClick={this.props.toggleFeedbackModalIsVisible}
          />
        }
      >
        <IconHolder>
          <img src={megaphone} className={styles.megaphoneIcon} />
        </IconHolder>
      </Tooltip>
    );
  }

  renderRightSide(): JSX.Element {
    const { collapsed } = this.state;

    return (
      <div className={styles.rightSide}>
        <div
          className={classnames(styles.iconsContainer, {
            [styles.collapsed]: collapsed
          })}
        >
          {this.renderShareButton()}
          {this.renderFeedbackButton()}
        </div>
        {this.renderDonateOrBackButton()}
      </div>
    );
  }

  render(): JSX.Element {
    const { collapsed } = this.state;

    return (
      <React.Fragment>
        <div
          className={classnames(styles.placeHolder, {
            [styles.collapsed]: collapsed
          })}
        >
          <div
            className={classnames(styles.outerGameHeader, {
              [styles.collapsed]: collapsed
            })}
            ref={this.header}
          >
            <div className={styles.innerGameHeader}>
              {this.renderLeftSide()}
              {this.renderRightSide()}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
