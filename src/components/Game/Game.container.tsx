import * as React from 'react';
import { connect } from 'react-redux';
import Game from './Game';
import { selectors } from '../../redux/reducers';
import { IGame } from '../../types/game';
import { IState } from '../../types/state';

const { getGamesData } = selectors;

interface IProps {
  game: IGame;
}

class GameContainer extends React.PureComponent<IProps> {
  render() {
    return <Game {...this.props.game} />;
  }
}

const mapStateToProps = (state: IState, { id }: { id: string }) => {
  return {
    game: getGamesData(state)[id]
  };
};

export default connect(mapStateToProps)(GameContainer);
