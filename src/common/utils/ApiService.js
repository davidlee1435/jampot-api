var _ = require('lodash');

export default class ApiService {
  constructor() {
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }

  get(url, headers={}) {
    headers = _.merge({}, headers, this.defaultHeaders);
    var params = {
      method: 'GET',
      headers: new Headers(headers)
    }
    return fetch(url, params)
           .then((response) => response.json())
           .catch((error) => {
             console.error(error);
           })
  }
  // postAsync(params, url, onSuccess, onFailure) {
  //     return fetch(url, params)
  //            .then((response) => response.json())
  //            .then((responseJson) => {})
  // }
}
