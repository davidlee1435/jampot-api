import React from 'react';
import {StyleSheet, View, Text} from 'react-native'
import {connect} from 'react-redux';
import {fetchLogin, requestLogin} from './../actions';

import SpotifyLoginButton from './SpotifyLoginButton.js';

class LoginView extends React.Component {
  constructor() {
    super();
    this.login = this.login.bind(this);
  }

  login() {
    this.props.dispatch(requestLogin())
    this.props.dispatch(fetchLogin())
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.logo}>Jampot</Text>
        <SpotifyLoginButton style={styles.button} onPress={this.login}></SpotifyLoginButton>
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
