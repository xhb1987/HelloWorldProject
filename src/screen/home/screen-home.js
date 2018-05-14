import * as React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, SceneMap } from 'react-native-tab-view';
import TabContainer from '../tabs/tabs-container';
import styles from './styles';
const initialLayout = {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
};

const ScreenHome = ({ tabRounter, scene, tabHeader, indexChange, navigator }) => (
    <View style={styles.viewContainer}>
        <TabViewAnimated
            navigationState={tabRounter}
            renderScene={scene}
            renderHeader={tabHeader}
            onIndexChange={indexChange}
            initialLayout={initialLayout}
        />

        <TabContainer navigator={navigator} />
    </View>
);

export default ScreenHome;
