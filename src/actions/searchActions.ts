import { Dispatch } from 'redux';
import { IState } from '../types/state';
import { selectors } from '../redux/reducers';

export const searchGame = (query: string) => (
  dispatch: Dispatch<IState>,
  getState: () => IState
) => {
  const state = getState();
  const games = selectors.getGamesData(state);
  console.log(games);
};
