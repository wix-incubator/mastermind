import { combineReducers } from 'redux';
import reduxCornell from 'redux-cornell';
import { techs } from '../../Constants/techData';

const { selectors, actions, superReducer } = reduxCornell({
  initialState: {
    devs: {
      data: {}
    },
    games: {
      sorted: ['1a2b3c'],
      data: {
        '1a2b3c': {
          name: 'DOOM Minesweeper',
          description:
            'Minesweeper is a single-player puzzle video game. The objective of the game is to clear a rectangular board containing hidden mines or bombs without detonating any of them, with help from clues about the number of neighboring mines in each field. This version of minesweeper is themed with the classic game DOOM, which is considered by many as one of the greatest games of all time. It popularized the 1st person shooter genre and introduced 3D gaming to the world.',
          keyPointsOfInterest:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          developerGithubId: 'eyaleizenberg',
          url: 'https://io.github.com/minesweeper',
          techIds: ['react', 'html5', 'sass', 'typescript']
        }
      }
    },
    techs
  }
});

export { selectors, actions };

const rootReducer = combineReducers({ superReducer });

export default rootReducer;
