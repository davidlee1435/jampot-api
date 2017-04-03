import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Provider } from 'react-redux';

import createStore from './src/rootReducer';

const store = createStore();

// import MixView from './src/modules/mix/components/MixView'
import LoginView from './src/modules/login/components/LoginView'

export default class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <View style={styles.container}>
          <LoginView></LoginView>
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  }
})
