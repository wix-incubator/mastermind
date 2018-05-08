import { combineReducers } from 'redux';
import reduxCornell from 'redux-cornell';
import { routerReducer } from 'react-router-redux';
import { techData } from '../../constants/techData';

const { selectors, actions, superReducer } = reduxCornell({
  initialState: {
    feedbackModal: {
      isVisible: false
    },
    devs: {
      data: {}
    },
    keyPointsOfInterest: {
      data: {}
    },
    games: {
      data: {}
    },
    techs: {
      data: techData
    },
    search: {
      results: null,
      query: '',
      isOverlayVisible: false
    },
    currentGame: {
      inFullScreen: false
    }
  }
});

export { selectors, actions };

const rootReducer = combineReducers({
  superReducer,
  routing: routerReducer
});

export default rootReducer;
