import React from 'react';
import {StyleSheet, View, Text, Linking} from 'react-native'
import {connect} from 'react-redux';
import {fetchLogin, requestLogin} from './../actions';
import {WebBrowser} from 'expo';

import ApiUrl from 'jampot/src/common/ApiUrl.js';
import ApiService from 'jampot/src/common/utils/ApiService.js';
import SpotifyLoginButton from './SpotifyLoginButton.js';

var apiService = new ApiService()
const apiUrl = new ApiUrl()

class LoginView extends React.Component {
  constructor() {
    super();
    this.state = {
      redirect_uri: ''
    }

    this.login = this.login.bind(this);
  }

  componentDidMount() {
    Linking.addEventListener('url', this._handleLoginRedirect);
  }

  _handleLoginRedirect = async (event) => {
    console.log(event)
    console.log("fjdkslajfkldsa")
    WebBrowser.dismissBrowser();
  }

  _fetchLoginRedirect = async () => {
    console.log("sending shit")
    const redirectResponse = await apiService.get(apiUrl.login());
    await WebBrowser.openBrowserAsync(redirectResponse.data.redirect_uri)
  }

  login() {
    this.props.dispatch(requestLoginRedirect())
    this.props.dispatch(fetchLoginRedirect())
  }

  render() {
    var url = Linking.getInitialURL().then((url) => {
      if (url) {
        console.log('Initial url is: ' + url);
      }
    }).catch(err => console.error('An error occurred', err));
    return(
      <View style={styles.container}>
        <Text style={styles.logo}>Jampot</Text>
        <SpotifyLoginButton style={styles.button} onPress={this._fetchLoginRedirect}></SpotifyLoginButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    fontSize: 40,
    fontWeight: 'bold',
  }
})

function mapStateToProps(state) {
  const{ data } = state.account
  return {
    data
  }
}
export default connect(mapStateToProps)(LoginView);
