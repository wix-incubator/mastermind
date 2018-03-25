import * as React from 'react';
import { connect } from 'react-redux';
import Techs from './Techs';
import { selectors } from '../../redux/reducers';
import { ITech } from '../../types/tech';
import { IState } from '../../types/state';

const { getTechsData } = selectors;

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
