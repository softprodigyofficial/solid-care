/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry,Dimensions} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import EStyleSheet from 'react-native-extended-stylesheet';

let {height, width} = Dimensions.get('window');
EStyleSheet.build({
  $rem: width > 340 ? 18 : 16
});

AppRegistry.registerComponent(appName, () => App);
