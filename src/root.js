import React from 'react';
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';
import makeStore from './store';
// import { App } from './component/index';
import { registerScreens } from './screen/index';
const Icon = require('react-native-vector-icons/Ionicons');

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
                Icon.getImageSource('ios-settings', 35),
                Icon.getImageSource('ios-settings-outline', 35),
                Icon.getImageSource('ios-people', 35),
                Icon.getImageSource('ios-navigate-outline', 35),
                Icon.getImageSource('ios-navigate', 35)
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
                label: '首页',
                screen: 'screen.Home',
                icon: settingsIcon,
                title: '首页',
                iconInsets: {
                    top: 6,
                    left: 0,
                    bottom: 10,
                    right: 0
                }
            },
            {
                label: '广场',
                screen: 'screen.Square',
                icon: settingsIcon,
                title: '广场',
                iconInsets: {
                    top: 6,
                    left: 0,
                    bottom: 10,
                    right: 0
                }
            },
            {
                label: '我的',
                screen: 'screen.Profile',
                icon: peopleIcon,
                title: '我的',
                iconInsets: {
                    top: 6,
                    left: 0,
                    bottom: 10,
                    right: 0
                }
            }
        ];
        Navigation.startTabBasedApp({
            tabs,
            tabsStyle: {
                tabFontFamilay: 'BioRhyme-Bold',
                tabBarTextFontSize: 12,
                tabBarSelectedButtonColor: '#ff7878',
                tabBarLabelColor: 'black',
                tabBarSelectedLabelColor: '#ff7878'
            },
            animationType: 'slide-down'
        });
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
