import * as React from 'react';
import { connect } from 'react-redux';
import Game from './Game';
import { selectors, actions } from '../../redux/reducers';
import { IGame } from '../../types/game';
import { IState } from '../../types/state';
import { match } from 'react-router';
import { fetchGames } from '../../actions/gameActions';
const { getGamesData, getCurrentGameInFullScreen } = selectors;
const { toggleCurrentGameInFullScreen } = actions;

interface MatchParams {
  id: string;
}

interface IProps {
  game: IGame;
  match: match<MatchParams>;
  fetchGames: () => any;
  inFullScreen: boolean;
  toggleCurrentGameInFullScreen: () => any;
}

class GameContainer extends React.PureComponent<IProps> {
  componentDidMount() {
    const { game, fetchGames } = this.props;
    if (!game) {
      fetchGames();
    }
  }

  render() {
    const { inFullScreen, toggleCurrentGameInFullScreen, game } = this.props;
    return (
      <Game
        inFullScreen={inFullScreen}
        toggleCurrentGameInFullScreen={toggleCurrentGameInFullScreen}
        {...game}
      />
    );
  }
}

const mapStateToProps = (
  state: IState,
  { match }: { match: match<MatchParams> }
) => {
  const { id } = match.params;
  return {
    game: getGamesData(state)[id],
    inFullScreen: getCurrentGameInFullScreen(state)
  };
};

export default connect(mapStateToProps, {
  fetchGames,
  toggleCurrentGameInFullScreen
})(GameContainer);
