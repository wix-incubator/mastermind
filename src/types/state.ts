import { IDev } from './dev';
import { IGame } from './game';
import { ITech } from './tech';

export interface IState {
  superReducer: {
    devs: { [key: string]: IDev };
    keyPointsOfInterest: {
      data: { [key: string]: string };
    };
    games: {
      sorted: string[];
      data: { [key: string]: IGame };
    };
    techs: {
      data: {
        [key: string]: ITech;
      };
    };
    search: {
      results?: string[];
    };
  };
}
