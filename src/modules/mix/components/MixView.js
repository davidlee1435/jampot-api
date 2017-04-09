import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import HorizontalPersonList from 'jampot/src/modules/person/components/HorizontalPersonList.js';
import SongListItem from 'jampot/src/modules/songs/components/SongListItem.js';

class MixView extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View>
        <HorizontalPersonList></HorizontalPersonList>
        <SongListItem></SongListItem>
        <SongListItem></SongListItem>
        <SongListItem></SongListItem>
        <SongListItem></SongListItem>
      </View>
    )
  }
}

export default MixView;
