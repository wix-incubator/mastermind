import * as React from 'react';
import { connect } from 'react-redux';
import Showcase from './Showcase';
import { selectors } from '../../redux/reducers';
import { IGame } from '../../types/game';
import { IState } from '../../types/state';
import { fetchGames } from '../../actions/gameActions';
const { getGamesData } = selectors;

interface IProps {
  games: { [key: string]: IGame };
  fetchGames: () => any;
}

class ShowcaseContainer extends React.PureComponent<IProps> {
  public static defaultProps: Partial<IProps> = {
    games: {} as { [key: string]: IGame }
  };

  componentDidMount() {
    const { fetchGames, games } = this.props;
    if (!Object.keys(games).length) {
      fetchGames();
    }
  }

  render() {
    return <Showcase games={this.props.games} />;
  }
}

const mapStateToProps = (state: IState) => ({
  games: getGamesData(state)
});

export default connect(mapStateToProps, { fetchGames })(ShowcaseContainer);
