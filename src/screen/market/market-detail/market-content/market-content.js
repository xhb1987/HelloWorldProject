import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { TabViewAnimated } from 'react-native-tab-view';

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1
    }
});

const initialLayout = {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
};

const MarketContent = ({ tabRounter, scene, indexChange, tabHeader }) => (
    <View style={styles.viewContainer}>
        <TabViewAnimated
            navigationState={tabRounter}
            renderScene={scene}
            renderHeader={tabHeader}
            onIndexChange={indexChange}
            initialLayout={initialLayout}
        />
    </View>
);

export default MarketContent;
