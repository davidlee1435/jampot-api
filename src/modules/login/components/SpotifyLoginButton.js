import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';

export default class SpotifyLoginButton extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={['#1ED760', '#80EF59']} style={styles.linearGradient}>
          <TouchableOpacity onPress={() => {console.log('you tapped button')}}>
            <Text
              style={styles.text}>
              Login with Spotify
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30
  },
  linearGradient: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 5
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold'
  }
})
