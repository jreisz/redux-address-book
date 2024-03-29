import { createStore, applyMiddleware, combineReducers } from 'redux';
import promise from 'redux-promise-middleware';

import usersReducer from './reducers/usersReducer';
import userProfile from './reducers/userProfileReducer';

export default createStore(
  combineReducers({
    usersReducer,
    userProfile,
  }),
  applyMiddleware(
  //  logger,
    promise(),
  ),
);
