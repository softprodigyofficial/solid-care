/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import AppNavigator from './Navigator';
import {createAppContainer} from 'react-navigation';

const App = createAppContainer(AppNavigator);

export default App;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: '1.2rem',
    textAlign: 'center',
   fontFamily: 'Blue Liquid Italic',
    margin: '0.5rem',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
//export default  App;