import * as React from 'react';
import { Dimensions } from 'react-native';
import { TabViewAnimated } from 'react-native-tab-view';

const initialLayout = {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
};

const CommonProductList = ({ tabRounter, scene, tabHeader, indexChange, navigator }) => (
    <TabViewAnimated
        navigationState={tabRounter}
        renderScene={scene}
        renderHeader={tabHeader}
        onIndexChange={indexChange}
        initialLayout={initialLayout}
    />
);

export default CommonProductList;
