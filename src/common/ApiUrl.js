export default class ApiUrl {
  constructor(){
    this.baseUrl = "http://localhost:5000"
    this.apiUrl = "http://localhost:5000/api/v1";
  }
  mixList(accountId) {
    return this.apiUrl + '/accounts/' + accountId + '/mixes'
  }
  mix(accountId, mixId) {
    return this.apiUrl + '/accounts/' + accountId + '/mixes/' + mixId
  }
  login() {
    return this.baseUrl + '/login'
  }
}
