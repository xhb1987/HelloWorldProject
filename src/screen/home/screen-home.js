import * as React from 'react';
import Header from '../components/header/header';
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
            leftButtonType="none"
            centerComponent={
                <HomeTabBarContainer
                    navigator={navigator}
                    textStyle={{
                        color: 'white',
                        fontSize: 15
                    }}
                    iconStyle={{
                        color: 'white',
                        size: 16
                    }}
                />
            }
            outerContainerStyles={{
                height: 56,
                paddingBottom: 10
            }}
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
