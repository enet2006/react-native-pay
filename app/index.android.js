/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Navigator,
  StatusBar
} from 'react-native';
import Main from './src/main'
class AgedTea extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor={'green'}>
        </StatusBar>
        <Navigator
          initialRoute={{ name: 'Main', component: Main }}
          configureScene={(route) => {
            return Navigator.SceneConfigs.PushFromRight;
          } }
          renderScene={(route, navigator) => {
            let Component = route.component;
            return <Component {...route.params} navigator={navigator} />
          } } />
      </View>
    )
  }
}
AppRegistry.registerComponent('AgedTea', () => AgedTea);