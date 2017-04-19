import React from 'react';
import {StyleSheet, Text, View, ListView, TouchableHighlight, Button} from 'react-native';
import { connect } from 'react-redux';
import {fetchAccountMixes, requestAccountMixes} from './../actions';

import MixFeed from './MixFeed.js';

var _ = require('lodash');

class MixFeedView extends React.Component {
  static navigationOptions = {
     title: 'Mixes',
     header: {
       right: <Button title="Add Mix"/>,
     }
    //  headerRight: <Button title="Info"/>,
  };


  constructor() {
    super();
    let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
    this.state = {
      dataSource: dataSource
    }
    this._renderEmpty = this._renderEmpty.bind(this);
    this._renderList = this._renderList.bind(this);
  }

  _getMixes() {
    this.props.dispatch(requestAccountMixes({id: 1}))
    this.props.dispatch(fetchAccountMixes({id: 1}))
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

  _renderEmpty() {
    return (
      <View style={{alignSelf: 'center', flexDirection:'row'}}>
        <Text>
          Make your first playlist!
        </Text>
      </View>
    )
  }

  _renderList() {
    return (
      <MixFeed navigation={this.props.navigation} accountId={1} dataSource={this.state.dataSource}/>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.dataSource.getRowCount() ?
          this._renderList() :
          this._renderEmpty()
        }

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
export default connect(mapStateToProps)(MixFeedView)
