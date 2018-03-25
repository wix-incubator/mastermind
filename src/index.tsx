import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './redux/store/configureStore';

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <span>HELLO!</span>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
