import { Dispatch } from 'redux';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { IState } from '../types/state';
import { actions } from '../redux/reducers';
import { push } from 'react-router-redux';
import { getGamePath } from '../utilities/routes';

export const fetchGames = () => (dispatch: Dispatch<IState>) => {
  axios
    .get(
      'https://raw.githubusercontent.com/wix-incubator/mastermind/master/games/games.json'
    )
    .then((response: AxiosResponse) => {
      const { data } = response;
      dispatch(actions.overrideGames({ data }));
    })
    .catch((error: AxiosError) => {
      // tslint:disable-next-line
      console.error("Could not fetch games", error);
    });
};

export const navigateToGame = (id: string) => (dispatch: Dispatch<IState>) => {
  dispatch(push(getGamePath(id)));
};
