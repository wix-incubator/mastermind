import { Dispatch } from 'redux';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { IState } from '../types/state';
import { actions } from '../redux/reducers';
const { extendKeyPointsOfInterestData } = actions;

export interface IFetchProps {
  url: string;
  id: string;
}

export const fetchKeyPointsOfInterest = ({ url, id }: IFetchProps) => (
  dispatch: Dispatch<IState>
) => {
  axios
    .get(url)
    .then((response: AxiosResponse) => {
      dispatch(extendKeyPointsOfInterestData({ [id]: response.data }));
    })
    .catch((error: AxiosError) => {
      // tslint:disable-next-line
      console.error("Could not fetch key points of interest - ", url, error);
    });
};
