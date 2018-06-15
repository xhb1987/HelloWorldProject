import * as React from 'react';
import { Header } from 'react-native-elements';
import { View, Dimensions, PixelRatio } from 'react-native';
import { TabViewAnimated } from 'react-native-tab-view';
import HomeTabBarContainer from '../components/tab-bar/tab-bar-container';
import TabContainer from '../tabs/tabs-container';
import styles from './styles';

const initialLayout = {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
};

const ScreenHome = ({ tabRounter, scene, tabHeader, indexChange, navigator }) => (
    <View style={styles.viewContainer}>
        <Header
            outerContainerStyles={{
                height: 55,
                paddingBottom: 12.5,
                borderBottomColor: 'white',
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 0
            }}
            centerComponent={<HomeTabBarContainer navigator={navigator} />}
        />
        <TabViewAnimated
            navigationState={tabRounter}
            renderScene={scene}
            renderHeader={tabHeader}
            onIndexChange={indexChange}
            initialLayout={initialLayout}
        />
    </View>
);

export default ScreenHome;
