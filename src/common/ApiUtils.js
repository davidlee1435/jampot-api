export default class ApiUtils {
  postAsync(params, url, onSuccess, onFailure) {
      return fetch(url, params)
             .then((response) => response.json())
             .then((responseJson) => {})
  }
}
