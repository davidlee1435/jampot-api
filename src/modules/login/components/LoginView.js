import React from 'react';
import {StyleSheet, View, Text} from 'react-native'

import SpotifyLoginButton from './SpotifyLoginButton.js';

class LoginView extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.logo}>Jampot</Text>
        <SpotifyLoginButton style={styles.button}></SpotifyLoginButton>
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
export default LoginView;
