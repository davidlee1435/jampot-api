import { RECEIVE_LOGIN, REQUEST_LOGIN } from './constants';

var _ = require('lodash');

const initialState = {
  data: {},
  ui: {}
}

export default function LoginReducer(state=initialState, action) {
  switch(action.type) {
    case RECEIVE_LOGIN:
      return _.assign({}, state, {
        data: action.account,
        ui: {loading: false}
      })
    case REQUEST_LOGIN:
      return _.merge({}, state, {
        ui: {loading: true}
      })
    default:
      return state
  }
}
