import { combineReducers } from 'redux';
import reduxCornell from 'redux-cornell';

const { selectors, actions, superReducer } = reduxCornell({
  initialState: {
    games: {
      sorted: ['1a2b3c'],
      data: {
        '1a2b3c': {
          name: 'DOOM Minesweeper',
          description:
            'Minesweeper is a single-player puzzle video game. The objective of the game is to clear a rectangular board containing hidden mines or bombs without detonating any of them, with help from clues about the number of neighboring mines in each field. This version of minesweeper is themed with the classic game DOOM, which is considered by many as one of the greatest games of all time. It popularized the 1st person shooter genre and introduced 3D gaming to the world.',
          developerGithubId: 'eyaleizenberg',
          url: 'https://io.github.com/minesweeper'
        }
      }
    },
    techs: {
      data: {
        react: {
          name: 'React',
          icon:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png',
          homepage: 'https://reactjs.org/'
        },
        redux: {
          name: 'Redux',
          icon:
            'https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png'
        },
        typescript: {
          name: 'Typescript',
          icon:
            'https://cloud.githubusercontent.com/assets/10656223/15247118/e71dc6a2-1909-11e6-9b90-ae86204f41c3.png'
        }
      }
    }
  }
});

export { selectors, actions };

const rootReducer = combineReducers({ superReducer });

export default rootReducer;
