import React from 'react';
import {StyleSheet, Text, ListView, View} from 'react-native';
import MixFeedItem from './MixFeedItem.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ListView
        navigation={this.props.navigation}
        dataSource={this.props.dataSource}
        renderRow={(rowData) =>
          <MixFeedItem data={rowData}/>
        }
      />
    )
  }
}
