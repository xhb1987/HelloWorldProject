import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, SceneMap } from 'react-native-tab-view';

const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width
};

const ScreenHome = ({ tabRounter, scene, tabHeader, indexChange }) => (
    <TabViewAnimated
        navigationState={tabRounter}
        renderScene={scene}
        renderHeader={tabHeader}
        onIndexChange={indexChange}
        initialLayout={initialLayout}
    />
);

export default ScreenHome;
