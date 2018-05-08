import * as React from 'react';
import { connect } from 'react-redux';
import GameHeader from './GameHeader';
import FeedbackModal from '../FeedbackModal/FeedbackModal';
import { selectors, actions } from '../../redux/reducers';
import { IGame } from '../../types/game';
import { IDev } from '../../types/dev';
import { IState } from '../../types/state';
import { sendFeedback } from '../../actions/feedbackActions';
const {
  getDevsData,
  getFeedbackModalIsVisible,
  getCurrentGameInFullScreen
} = selectors;
const { toggleFeedbackModalIsVisible, toggleCurrentGameInFullScreen } = actions;

interface IProps {
  dev: IDev;
  game: IGame;
  toggleFeedbackModalIsVisible: () => void;
  sendFeedback: () => any;
  isFeedbackModalVisible: boolean;
  inFullScreen: boolean;
  toggleCurrentGameInFullScreen: () => any;
}

class GameHeaderContainer extends React.PureComponent<IProps> {
  public static defaultProps: Partial<IProps> = {
    dev: {} as IDev
  };

  render() {
    const {
      toggleFeedbackModalIsVisible,
      isFeedbackModalVisible,
      sendFeedback,
      inFullScreen,
      toggleCurrentGameInFullScreen,
      game: {
        paypalUsername,
        patreonUsername,
        gameName,
        createdDate,
        rating,
        githubUrl
      },
      dev: { name }
    } = this.props;

    return (
      <React.Fragment>
        {isFeedbackModalVisible && (
          <FeedbackModal
            name={name}
            onSend={sendFeedback}
            closeModal={toggleFeedbackModalIsVisible}
          />
        )}
        <GameHeader
          gameName={gameName}
          name={name}
          paypalUsername={paypalUsername}
          patreonUsername={patreonUsername}
          createdDate={createdDate}
          rating={rating}
          githubUrl={githubUrl}
          toggleFeedbackModalIsVisible={toggleFeedbackModalIsVisible}
          inFullScreen={inFullScreen}
          toggleCurrentGameInFullScreen={toggleCurrentGameInFullScreen}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (
  state: IState,
  { game: { developerGithubId } }: { game: { developerGithubId: string } }
) => {
  return {
    dev: getDevsData(state)[developerGithubId],
    isFeedbackModalVisible: getFeedbackModalIsVisible(state),
    inFullScreen: getCurrentGameInFullScreen(state)
  };
};

export default connect(mapStateToProps, {
  toggleFeedbackModalIsVisible,
  sendFeedback,
  toggleCurrentGameInFullScreen
})(GameHeaderContainer);
