import ApiUrl from 'jampot/src/common/ApiUrl.js';
import ApiService from 'jampot/src/common/utils/ApiService';
import { RECEIVE_LOGIN_REDIRECT, REQUEST_LOGIN_REDIRECT } from './constants.js';

const apiUrl = new ApiUrl()
const apiService = new ApiService()

export function fetchLoginRedirect() {
  return dispatch => {
    return apiService.get(apiUrl.login())
           .then(json => dispatch(receiveLoginRedirect(json)))
  }
}

export function requestLoginRedirect() {
    return {
      type: REQUEST_LOGIN_REDIRECT,
      receivedAt: Date.now()
    }
}

export function receiveLoginRedirect(json) {
  return {
    type: RECEIVE_LOGIN_REDIRECT,
    redirect_uri: json.data.redirect_uri,
    receivedAt: Date.now()
  }
}
