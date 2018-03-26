import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './redux/store/configureStore';
import Layout from './components/Layout/Layout';
import './global.scss';

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
