import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class SongListItem extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.score}>
          <Text style={styles.scoreText}>+4</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.songTitle}>Hello</Text>
          <Text style={styles.artistText}>Adele</Text>
        </View>
        <View style={styles.commands}>
          <Text></Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    borderBottomColor: "#eee",
    borderBottomWidth: 0.5,
  },
  score: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  body: {
    flex: 4,
    justifyContent: 'center',
    padding: 10
  },
  commands: {
    flex: 1,
    justifyContent: 'center'
  },
  scoreText: {
    fontWeight: 'bold'
  },
  songTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  artistText: {
    color: "#a5a5a5"
  }
})
