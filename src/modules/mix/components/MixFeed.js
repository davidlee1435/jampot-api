import React from 'react';
import {StyleSheet, Text, ListView, View} from 'react-native';
import MixFeedItem from './MixFeedItem.js';

export default class MixFeed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ListView
        dataSource={this.props.dataSource}
        renderRow={(rowData) =>
          <MixFeedItem
            navigation={this.props.navigation}
            data={rowData}/>
        }
      />
    )
  }
}
