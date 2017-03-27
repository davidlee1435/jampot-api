import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class MixHeader extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Mix</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    alignSelf: 'flex-end'
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
  }
});
