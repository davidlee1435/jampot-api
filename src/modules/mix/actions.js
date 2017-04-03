import ApiUrl from 'jampot/src/common/ApiUrl.js';
import ApiService from 'jampot/src/common/utils/ApiService';
import { RECEIVE_ACCOUNT_MIXES, REQUEST_ACCOUNT_MIXES } from './constants.js';

const apiUrl = new ApiUrl()
const apiService = new ApiService()

export function fetchAccountMixes(account) {
    return dispatch => {
        return apiService.get(apiUrl.mixList(account.id))
               .then(json => dispatch(receiveAccountMixes(account, json)))
      }
}

export function requestAccountMixes(account) {
  return {
    type: REQUEST_ACCOUNT_MIXES,
    account,
    receivedAt: Date.now()
  }
}

function receiveAccountMixes(account, json) {
  return {
    type: RECEIVE_ACCOUNT_MIXES,
    account,
    mixes: json.data,
    receivedAt: Date.now()
  }
}


// postMixAsync() {
//   var params = {
//     method: 'post',
//     headers: new Headers({
//       'Content-Type': 'application/json'
//     }),
//     body: JSON.stringify({
//       name: 'fasfs'
//     })
//   }
//
//   return fetch(apiUrl.mixList(1), params)
//          .then((response) => response.json())
//          .then((responseJson) => {
//
//            this.setState({
//              mixes: _.concat(this.state.mixes, responseJson.data),
//              dataSource: ds.cloneWithRows(this.state.mixes.concat(responseJson.data))
//            });
//          })
//          .catch((error) => {
//            console.error(error)
//          })
// }
//
//
