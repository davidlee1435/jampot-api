import { RECEIVE_ACCOUNT_MIXES } from './constants';

var _ = require('lodash');

const initialState = {
  mixes: {
    data: {
      byId: {}
    },
    ui: {
      loading: false
    }
  }
}

export default function MixReducer(state=initialState, action) {
  switch (action.type) {
    case RECEIVE_ACCOUNT_MIXES:
      return _.merge({}, state, {
        mixes: {
          data: {
            byId: _.keyBy(action.mixes, 'id')
          },
          ui: {
            loading: false
          }
        }
      })
    default:
      return state
  }
}
