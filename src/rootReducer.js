import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import {mix} from './modules';
import {login} from './modules'

const middleware = applyMiddleware(thunk);

export default (data = {}) => {
  const rootReducer = combineReducers({
    ['mix']: mix.reducer,
    ['account']: login.reducer
  })
  return createStore(rootReducer, data, middleware)
}
