import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Provider } from 'react-redux';

import createStore from './src/rootReducer';
import { StackNavigator } from 'react-navigation';

const store = createStore();

import MixFeedView from './src/modules/mix/components/MixFeedView'
import LoginView from './src/modules/login/components/LoginView'
import MixView from './src/modules/mix/components/MixView.js';

const AppNavigator = StackNavigator({
  LoginView: {
    screen: LoginView,
  },
  MixFeedView: {
    screen: MixFeedView,
  },
  MixView: {
    screen: MixView,
  },
}, {
  headerMode: 'screen'
});


export default class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <View style={styles.container}>
          <AppNavigator></AppNavigator>
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
