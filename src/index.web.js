import { AppRegistry } from 'react-native';
import { WebRoot } from './root';

AppRegistry.registerComponent('HelloWorldProject', () => WebRoot);

if (window.document) {
    AppRegistry.runApplication('HelloWorldProject', {
        rootTag: document.getElementById('root')
    });
}
