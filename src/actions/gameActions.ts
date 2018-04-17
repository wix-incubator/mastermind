import { Dispatch } from 'redux';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { IState } from '../types/state';
import { actions } from '../redux/reducers';

export const fetchGames = () => (dispatch: Dispatch<IState>) => {
  axios
    .get(
      'https://raw.githubusercontent.com/wix-incubator/mastermind/master/games/games.json'
    )
    .then((response: AxiosResponse) => {
      const { data } = response;
      dispatch(actions.extendGamesData(data));
    })
    .catch((error: AxiosError) => {
      // tslint:disable-next-line
      console.error("Could not fetch games", error);
    });
};
