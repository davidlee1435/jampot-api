import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import {mix} from './modules';

const middleware = applyMiddleware(thunk);

export default (data = {}) => {
  const rootReducer = combineReducers({
    ['mix']: mix.reducer
  })
  return createStore(rootReducer, data, middleware)
}
