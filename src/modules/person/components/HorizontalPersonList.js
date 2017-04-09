import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PersonList from './PersonList.js';

export default class HorizontalPersonList extends PersonList {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Kristin, Justine, Charlie and 4 more</Text>
        <Text style={styles.link}>Add more</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderBottomColor: "#eee",
    borderBottomWidth: 0.5,
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor: '#F5F6F7'
  },
  text:{
    color: '#a5a5a5'
  },
  link: {
    color: '#1984FF'
  }
})
