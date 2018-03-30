import { AppRegistry } from 'react-native';
import App from './App';
require('./protos/stringProto');

AppRegistry.registerComponent('albums', () => App);
