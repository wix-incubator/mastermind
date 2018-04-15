import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

export const history = createHistory();

const historyMiddleware = routerMiddleware(history);

export const configureStore = (initialState = {}) => {
  const middleware = composeWithDevTools(
    applyMiddleware(thunk, historyMiddleware)
  );
  return createStore(reducer, initialState, middleware);
};
