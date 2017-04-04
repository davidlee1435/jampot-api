import ApiUrl from 'jampot/src/common/ApiUrl.js';
import ApiService from 'jampot/src/common/utils/ApiService';
import { RECEIVE_LOGIN, REQUEST_LOGIN } from './constants.js';

const apiUrl = new ApiUrl()
const apiService = new ApiService()

export function fetchLogin() {
  return dispatch => {
    return apiService.get(apiUrl.login())
           .then(json => dispatch(receiveLogin(json)))
  }
}

export function requestLogin() {
    return {
      type: REQUEST_LOGIN,
      receivedAt: Date.now()
    }
}

export function receiveLogin(json) {
  return {
    type: RECEIVE_LOGIN,
    account: json.data,
    receivedAt: Date.now()
  }
}
