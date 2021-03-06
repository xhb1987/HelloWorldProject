import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
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
    fabButton: {
        position: 'absolute',
        bottom: 30,
        right: 5,
        backgroundColor: '#ffffffdb',
        padding: 2,
        paddingTop: 5,
        paddingLeft: 3,
        borderRadius: 250,
        height: 45,
        width: 45,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 2.5,
        shadowOpacity: 0.5
    },
    fabIcon: {
        color: '#888'
    },
    networkIconContainer: {
        // width: 30,
        // height: 30,
        marginRight: -5,
        marginTop: -15,
        marginBottom: -15,
        marginLeft: -15
    },
    networkIcon: {
        fontSize: 35
    },

    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const Square = ({ navigator, toggleTextInput, toggleFabButton, socketAuthed, isLogin }) => {
    const headerCenterComponent = () => {
        return (
            <View style={styles.headerContainer}>
                <Icon
                    type="entypo"
                    name="dot-single"
                    containerStyle={styles.networkIconContainer}
                    iconStyle={[
                        styles.networkIcon,
                        { color: socketAuthed ? '#40f940ab' : 'black' }
                    ]}
                />
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
            </View>
        );
    };

    return (
        <TabWrapper navigator={navigator} hideTab={toggleTextInput}>
            <View style={styles.container}>
                <Header
                    leftButtonType="none"
                    centerComponent={headerCenterComponent()}
                    outerContainerStyles={{
                        height: 56,
                        paddingBottom: 10
                    }}
                />
                <ChatContainer navigator={navigator} />
                <TouchableOpacity
                    style={styles.fabButton}
                    activeOpacity={0.9}
                    onPress={() => toggleFabButton(toggleTextInput, isLogin)}
                >
                    <Icon
                        type="feather"
                        name={toggleTextInput ? 'navigation' : 'edit'}
                        size={25}
                        iconStyle={styles.fabIcon}
                    />
                </TouchableOpacity>
            </View>
        </TabWrapper>
    );
};

export default Square;
