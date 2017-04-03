export default class ApiService {

  // postAsync(params, url, onSuccess, onFailure) {
  //     return fetch(url, params)
  //            .then((response) => response.json())
  //            .then((responseJson) => {})
  // }

  get(url, headers={}) {
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
}
