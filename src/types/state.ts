import { IGame } from './game';

export interface IState {
  superReducer: {
    games: {
      sorted: string[];
      data: { [key: string]: IGame };
    };
    techs: {
      [key: string]: any;
    };
  };
}
