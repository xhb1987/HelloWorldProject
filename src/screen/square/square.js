import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import HomeTabBarContainer from '../components/tab-bar/tab-bar-container';
import TabContainer from '../tabs/tabs-container';
import ChatContainer from './chat/chat-container';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: Dimensions.get('window').height
    },
    fabButton: {
        position: 'absolute',
        bottom: 80,
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
    <View style={styles.container}>
        <Header
            outerContainerStyles={{
                borderBottomColor: 'white',
                backgroundColor: '#ed3349'
            }}
            centerComponent={
                <HomeTabBarContainer
                    navigator={navigator}
                    textStyle={{
                        color: 'white',
                        fontSize: 18
                    }}
                    iconStyle={{
                        color: 'white',
                        size: 16
                    }}
                />
            }
        />
        <ChatContainer />
        <Icon
            type="entypo"
            name="arrow-with-circle-right"
            color="#888888"
            size={30}
            iconStyle={styles.fabIcon}
            containerStyle={styles.fabButton}
            onPress={() => toggleFabButton(toggleTextInput)}
        />
        {toggleTextInput ? null : <TabContainer navigator={navigator} />}
    </View>
);

export default Square;
