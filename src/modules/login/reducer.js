import { RECEIVE_LOGIN_REDIRECT, REQUEST_LOGIN_REDIRECT } from './constants';

var _ = require('lodash');

const initialState = {
  data: {},
  ui: {}
}

export default function LoginReducer(state=initialState, action) {
  switch(action.type) {
    case RECEIVE_LOGIN_REDIRECT:
      return _.assign({}, state, {
        data: action.account,
        ui: {loading: false}
      })
    case REQUEST_LOGIN_REDIRECT:
      return _.merge({}, state, {
        ui: {loading: true}
      })
    default:
      return state
  }
}
