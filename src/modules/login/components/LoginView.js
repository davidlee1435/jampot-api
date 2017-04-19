import React from 'react';
import {StyleSheet, View, Text, Linking} from 'react-native'
import {connect} from 'react-redux';
import {fetchLogin, requestLogin} from './../actions';
import {WebBrowser} from 'expo';
import { NavigationActions } from 'react-navigation';

import ApiUrl from 'jampot/src/common/ApiUrl.js';
import ApiService from 'jampot/src/common/utils/ApiService.js';
import SpotifyLoginButton from './SpotifyLoginButton.js';

var apiService = new ApiService()
const apiUrl = new ApiUrl()

class LoginView extends React.Component {
  static navigationOptions = {
    header: {
      visible: false
    }
  }

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
    WebBrowser.dismissBrowser();
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: 'MixFeedView'})
      ]
    })
    this.props.navigation.dispatch(resetAction);
  }

  _fetchLoginRedirect = async () => {
    const redirectResponse = await apiService.get(apiUrl.login());
    await WebBrowser.openBrowserAsync(redirectResponse.data.redirect_uri)
  }

  login() {
    this.props.dispatch(requestLoginRedirect())
    this.props.dispatch(fetchLoginRedirect())
  }

  render() {
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
