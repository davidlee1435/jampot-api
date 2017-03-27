import ApiUrl from 'jampot/src/common/ApiUrl.js';
import { RECEIVE_ACCOUNT_MIXES } from './constants.js';

const apiUrl = new ApiUrl()

export function fetchAccountMixes(account) {
    return dispatch => {
        return fetch(apiUrl.mixList(account.id))
               .then(response => response.json())
               .then(json => dispatch(receiveAccountMixes(account, json)))
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


//   getMixesAsync() {
//     return fetch(apiUrl.mixList(1))
//           .then((response) => response.json())
//           .then((responseJson)=> {
//             this.setState({
//               mixes: responseJson.data,
//               dataSource: ds.cloneWithRows(responseJson.data),
//             });
//           })
//           .catch((error) => {
//             console.error(error);
//           });
//   }

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
