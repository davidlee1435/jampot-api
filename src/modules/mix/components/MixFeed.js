
import React from 'react';
import {StyleSheet, Text, ListView} from 'react-native';


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <ListView
        dataSource={this.props.dataSource}
        renderRow={(rowData) => <Text>{rowData.name}</Text>}
      />
    )
  }


}
