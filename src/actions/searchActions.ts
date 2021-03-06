import { Dispatch } from 'redux';
import { IState } from '../types/state';
import { actions, selectors } from '../redux/reducers';
import { IGame } from '../types/game';

const testGameRegex = (query: string, game: IGame): boolean => {
  const regex = new RegExp(query, 'i');
  return !!(
    game.gameName.match(regex) ||
    game.techIds.some((id: string) => !!id.match(regex)) ||
    game.developerName.match(regex)
  );
};

const matchGames = (
  query: string,
  gamesData: { [key: string]: IGame }
): string[] => {
  return Object.keys(gamesData).reduce((res: string[], id: string) => {
    const game = gamesData[id];
    return testGameRegex(query, game) ? res.concat(id) : res;
  }, []);
};

let searchTimeout: number;

export const searchGame = (query: string) => (
  dispatch: Dispatch<IState>,
  getState: () => IState
) => {
  const { setSearchQuery, overrideSearch, setSearchResults } = actions;
  dispatch(setSearchQuery(query));
  clearTimeout(searchTimeout);
  if (query.length > 1) {
    searchTimeout = window.setTimeout(() => {
      dispatch(
        overrideSearch({ results: null, query, isOverlayVisible: true })
      );
      const state = getState();
      const games = selectors.getGamesData(state);
      const queryResults = matchGames(query, games);
      dispatch(setSearchResults(queryResults));
    }, 500);
  }
};

export const cancelSearch = () => (dispatch: Dispatch<IState>) => {
  dispatch(
    actions.overrideSearch({ results: [], query: '', isOverlayVisible: false })
  );
};
