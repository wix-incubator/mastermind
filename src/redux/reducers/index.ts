import { combineReducers } from 'redux';
import reduxCornell from 'redux-cornell';

const { selectors, actions, superReducer } = reduxCornell({
  initialState: {
    games: {
      data: []
    }
  }
});

export { selectors, actions };

const rootReducer = combineReducers({ superReducer });

export default rootReducer;
