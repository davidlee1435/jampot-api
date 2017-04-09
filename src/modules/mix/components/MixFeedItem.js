import React from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

DIMENSION = 100
export default class MixFeedItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <TouchableOpacity onPress={() => {this.props.navigation.navigate('MixFeed', {name: this.props.data.name})}}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{uri:'https://mosaic.scdn.co/640/3a2482d76ceeac1bcae2441bdb3b8db44857d56a83fe74fac99f5a864546a2d718f03a13ff35d42f9e8d9e24bbadb4cd5e685f522ce7458288dfa1b7bb70159b41c69fc9f61495dfb9fc992ea6cb3183'}}
            />
          <View style={styles.body}>
            <Text style={styles.name}>{this.props.data.name}</Text>
            <Text style={styles.people}>Charlie, Justine, and 4 others</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    height: DIMENSION,
    flexDirection: 'row',
    borderBottomColor: "#d6d7da",
    borderBottomWidth: 0.5,
  },
  image: {
    width: DIMENSION,
    height: DIMENSION

  },
  body: {
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'center'
  },
  name:{
    fontSize: 20,
    fontWeight: 'bold'
  },
  people: {
    paddingTop: 5,
    color: '#a5a5a5'
  }
})
