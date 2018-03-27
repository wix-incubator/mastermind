import * as React from 'react';
import { connect } from 'react-redux';
import GameHeader from './GameHeader';
import { selectors } from '../../redux/reducers';
import { IGame } from '../../types/game';
import { IDev } from '../../types/dev';
import { IState } from '../../types/state';

const { getDevsData } = selectors;

interface IProps {
  dev: IDev;
  game: IGame;
}

class GameHeaderContainer extends React.PureComponent<IProps> {
  public static defaultProps: Partial<IProps> = {
    dev: {} as IDev
  };

  render() {
    const {
      game: { paypalUsername, patreonUsername, gameName, createdDate, rating },
      dev: { name }
    } = this.props;

    return (
      <GameHeader
        gameName={gameName}
        name={name}
        paypalUsername={paypalUsername}
        patreonUsername={patreonUsername}
        createdDate={createdDate}
        rating={rating}
      />
    );
  }
}

const mapStateToProps = (
  state: IState,
  { game: { developerGithubId } }: { game: { developerGithubId: string } }
) => {
  return {
    dev: getDevsData(state)[developerGithubId]
  };
};

export default connect(mapStateToProps)(GameHeaderContainer);
