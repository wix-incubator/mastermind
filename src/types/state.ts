import { IDev } from './dev';
import { IGame } from './game';

export interface IState {
  superReducer: {
    devs: { [key: string]: IDev };
    games: {
      sorted: string[];
      data: { [key: string]: IGame };
    };
    techs: {
      [key: string]: any;
    };
  };
}
