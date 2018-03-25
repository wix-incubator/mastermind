import { combineReducers } from 'redux';
import reduxCornell from 'redux-cornell';

const { selectors, actions, superReducer } = reduxCornell({
  initialState: {
    games: {
      sorted: ['1a2b3c'],
      data: {}
    },
    techs: {
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
});

export { selectors, actions };

const rootReducer = combineReducers({ superReducer });

export default rootReducer;
