import React from 'react';
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';
import makeStore from './store';
// import { App } from './component/index';
import { registerScreens } from './screen/index';
const Icon = require('react-native-vector-icons/Ionicons');

if (!global.self) {
    global.self = global;
}

const store = makeStore();
registerScreens(store, Provider);

var settingsIcon;
var settingsOutlineIcon;
var peopleIcon;
var iosNavigateOutline;
var iosNavigate;

export class App {
    constructor() {
        this.populateIcons().then(() => {
            this.startApp();
        });
    }

    populateIcons = function() {
        return new Promise((resolve, reject) => {
            Promise.all([
                Icon.getImageSource('ios-settings', 40),
                Icon.getImageSource('ios-settings-outline', 40),
                Icon.getImageSource('ios-people', 40),
                Icon.getImageSource('ios-navigate-outline', 40),
                Icon.getImageSource('ios-navigate', 40)
            ]).then(values => {
                settingsIcon = values[0];
                settingsOutlineIcon = values[1];
                peopleIcon = values[2];
                iosNavigateOutline = values[3];
                iosNavigate = values[4];
                resolve(true);
            });
        });
    };

    startApp() {
        const tabs = [
            {
                screen: 'screen.Home'
            },
            {
                screen: 'screen.Square'
            },
            {
                screen: 'screen.ProductPublish'
            },
            {
                screen: 'screen.Message'
            },
            {
                screen: 'screen.Profile'
            }
        ];
        Navigation.startTabBasedApp({
            tabs,
            tabsStyle: {
                tabBarHidden: true,
                tabBarTranslucent: true,
                initialTabIndex: 4
            },
            appStyle: {},
            animationType: 'slide-down'
        });
        // Navigation.startSingleScreenApp({
        //     screen: { screen: 'screen.Home' },
        //     animationType: 'fade'
        // });
    }
}

export const Root = () => {
    if (Platform.OS === 'ios') {
    }
};

// export default Root;

export const WebRoot = () => (
    <Provider store={store}>
        <App />
    </Provider>
);
