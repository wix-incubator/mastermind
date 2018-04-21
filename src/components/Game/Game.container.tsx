import * as React from 'react';
import { connect } from 'react-redux';
import Game from './Game';
import { selectors } from '../../redux/reducers';
import { IGame } from '../../types/game';
import { IState } from '../../types/state';
import { match } from 'react-router';
import { fetchGames } from '../../actions/gameActions';
const { getGamesData } = selectors;

interface MatchParams {
  id: string;
}

interface IProps {
  game: IGame;
  match: match<MatchParams>;
  fetchGames: () => any;
}

class GameContainer extends React.PureComponent<IProps> {
  componentDidMount() {
    const { game, fetchGames } = this.props;
    if (!game) {
      fetchGames();
    }
  }

  render() {
    return <Game {...this.props.game} />;
  }
}

const mapStateToProps = (
  state: IState,
  { match }: { match: match<MatchParams> }
) => {
  const { id } = match.params;
  return {
    game: getGamesData(state)[id]
  };
};

export default connect(mapStateToProps, { fetchGames })(GameContainer);
