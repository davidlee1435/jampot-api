import React from 'react';
import {ListView, Text, StyleSheet} from 'react-native';
import PersonList from './PersonList.js';

export default class PersonFeed extends PersonList {
  render() {
    return (
      <ListView
        dataSource={this.props.dataSource}
        renderRow={(rowData) =>
          <Text> {rowData.name} </Text>
        }
      />
    )
  }
}

const styles = StyleSheet.create({
  container:{}
})
