// React and redux
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// React router (version < 4)
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

// Redux store
import UsersStore from './store';

// Styles
import './index.css';
import 'foundation-sites/dist/css/foundation.css';

// Containers
import App from './components/App';
import UsersContainer from './containers/UsersContainer';
import UserProfileContainer from './containers/UserProfileContainer';

// Original import from the 'create-react-app' setup
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={UsersStore}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={UsersContainer} />
        <Route path="user(:userName)" component={UserProfileContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
