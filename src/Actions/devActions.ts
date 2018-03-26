import { Dispatch } from 'redux';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { IState } from '../types/state';
import { actions } from '../redux/reducers';

export const fetchDev = (developerGithubId: string) => (
  dispatch: Dispatch<IState>
) => {
  axios
    .get(`https://api.github.com/users/${developerGithubId}`)
    .then((response: AxiosResponse) => {
      const { data } = response;
      dispatch(actions.extendDevsData({ [developerGithubId]: data }));
    })
    .catch((error: AxiosError) => {
      // tslint:disable-next-line
      console.error("Could not fetch github user - ", developerGithubId, error);
    });
};
