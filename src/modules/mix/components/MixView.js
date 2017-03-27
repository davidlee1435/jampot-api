import React from 'react';
import {StyleSheet, Text, View, ListView, TouchableHighlight} from 'react-native';
import { connect } from 'react-redux';
import {fetchAccountMixes} from './../actions';

import MixFeed from './MixFeed.js';

var _ = require('lodash');

class MixView extends React.Component {
  constructor() {
    super();
    let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
    this.state = {
      dataSource: dataSource
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchAccountMixes({id: 1}));
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(_.map(nextProps.data.byId, (mix) => {
        return mix
      }))
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <MixFeed accountId={1} dataSource={this.state.dataSource}/>
        <TouchableHighlight
          >
          <View style={styles.addMix}></View>
        </TouchableHighlight>
      </View>
    );
  }
}


const styles=StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  addMix: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
    alignSelf: 'flex-start'
  }
})

function mapStateToProps(state) {
  const { data } = state.mix.mixes
  return {
    data
  }
}
export default connect(mapStateToProps)(MixView)
