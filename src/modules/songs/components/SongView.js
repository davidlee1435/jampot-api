import React from 'react';
import {StyleSheet,Text, View} from 'react-native';

import PersonFeed from 'jampot/src/modules/person/PersonFeed.js';

class SongView extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image></Image>
          <View>
            <Text>Song Title</Text>
            <Text>Artist Name</Text>
            <Text></Text>
          </View>
        </View>
        <View>
          <Text>Added By: </Text>
          <PersonFeed></PersonFeed>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
})
