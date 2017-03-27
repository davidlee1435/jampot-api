import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Provider } from 'react-redux';

import createStore from './src/rootReducer';

const store = createStore();

import MixView from './src/modules/mix/components/MixView'

export default class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <View style={styles.container}>
          <MixView></MixView>
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15
  }
})
