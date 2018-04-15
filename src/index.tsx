import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { configureStore, history } from './redux/store/configureStore';
import Layout from './components/Layout/Layout';
import GameContainer from './components/Game/Game.container';
import { Route } from 'react-router';
import Welcome from './components/Welcome/Welcome';
import { ConnectedRouter } from 'react-router-redux';
import './styles/tippy.scss';
import './styles/global.scss';

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Layout>
        <Route exact path="/" component={Welcome} />
        <Route path="/games/:id" component={GameContainer} />
      </Layout>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
