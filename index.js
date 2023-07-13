/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler'; // this line add for drawer navigation support
AppRegistry.registerComponent(appName, () => App);
