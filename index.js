/**
 * @format
 * IMPORTANT: react-native-gesture-handler must be imported at the top
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import { App } from './src/root';
import { name as appName } from './app.json';

// For the new navigation system, you'll need to wrap App with NavigationContainer
// See NAVIGATION_MIGRATION.md for details

AppRegistry.registerComponent(appName, () => App);
