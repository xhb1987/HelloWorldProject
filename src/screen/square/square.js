import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import Header from '../components/header/header';
import HomeTabBarContainer from '../components/tab-bar/tab-bar-container';
import TabContainer from '../tabs/tabs-container';
import ChatContainer from './chat/chat-container';
import TabWrapper from '../../component/tab-wrapper/tab-wrapper';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: Dimensions.get('window').height
    },
    fabButtonHeight: {
        bottom: 80
    },
    fabButton: {
        position: 'absolute',
        bottom: 30,
        right: 5,
        backgroundColor: '#606060',
        padding: 2,
        paddingTop: 5,
        paddingLeft: 3,
        borderRadius: 20,
        height: 40,
        width: 40
    },
    fabIcon: {
        color: 'white'
    }
});

const Square = ({ navigator, toggleTextInput, toggleFabButton }) => (
    <TabWrapper navigator={navigator} hideTab={toggleTextInput}>
        <View style={styles.container}>
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
            <ChatContainer navigator={navigator} />
            <Icon
                type="entypo"
                name="arrow-with-circle-right"
                color="#888888"
                size={30}
                iconStyle={styles.fabIcon}
                containerStyle={
                    toggleTextInput ? [styles.fabButton, styles.fabButtonHeight] : styles.fabButton
                }
                onPress={() => toggleFabButton(toggleTextInput)}
            />
        </View>
    </TabWrapper>
);

export default Square;
