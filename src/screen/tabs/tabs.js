import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    PixelRatio,
    Animated
} from 'react-native';

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        width: Dimensions.get('window').width,
        height: 46,
        borderTopWidth: 1,
        borderColor: '#f0f0f0',
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: -4
        },
        shadowRadius: 3,
        shadowOpacity: 0.1,
        position: 'relative',
        overflow: 'visible',
        justifyContent: 'space-around',
        zIndex: 0
    },

    tabButtonContainer: {
        flex: 5,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 75,
        maxWidth: Dimensions.get('screen').width / 4
    },

    tabPublishContainer: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 7,
        position: 'absolute',
        height: 55,
        bottom: 0,
        top: -12,
        width: 55,
        left: Dimensions.get('screen').width / 2 - 30,
        borderRadius: 55,
        borderWidth: 0,
        borderTopWidth: 0,
        borderColor: '#f0f0f0',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: -3
        },
        shadowRadius: 2,
        shadowOpacity: 0.1,
        zIndex: -1
    },

    tabButtonSmall: {
        flex: 1,
        marginVertical: 3,
        maxWidth: 35
    },

    tabButtonSideLeft: {
        marginLeft: -20
    },

    tabButtonSideRight: {
        marginRight: -20
    },
    tabImage: {
        flex: 2,
        width: null,
        height: null,
        resizeMode: 'contain',
        aspectRatio: 0.6
    },
    tabTitle: {
        flex: 1,
        textAlign: 'center',
        fontSize: 12,
        paddingBottom: 2
    },
    imageBig: {
        marginTop: -2,
        marginBottom: 7,
        width: 44,
        height: 44,
        aspectRatio: 1
    }
});

class Tab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            positionTranslate: new Animated.Value(0)
        };
    }

    render() {
        const {
            goToIndex,
            goToSquare,
            goToPublish,
            goToMessage,
            goToProfile,
            activeTab
        } = this.props;
        return (
            <Animated.View style={styles.tabContainer}>
                <TouchableOpacity
                    style={[styles.tabButtonContainer, styles.tabButtonSmall]}
                    onPress={() => goToIndex()}
                >
                    <Image
                        style={styles.tabImage}
                        source={
                            activeTab === 'index'
                                ? require('../../asset/icon/index-selected.png')
                                : require('../../asset/icon/index.png')
                        }
                    />
                    <Text style={styles.tabTitle}>首页</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tabButtonContainer, styles.tabButtonSideLeft]}
                    onPress={() => goToSquare()}
                >
                    <Image
                        style={styles.tabImage}
                        source={
                            activeTab === 'square'
                                ? require('../../asset/icon/square-selected.png')
                                : require('../../asset/icon/square.png')
                        }
                    />
                    <Text style={styles.tabTitle}>广场</Text>
                </TouchableOpacity>
                <TouchableHighlight
                    underlayColor={'white'}
                    style={styles.tabPublishContainer}
                    onPress={() => goToPublish()}
                >
                    <Image
                        style={[styles.imageBig]}
                        source={require('../../asset/icon/publish.png')}
                    />
                </TouchableHighlight>
                <TouchableOpacity
                    style={[styles.tabButtonContainer, styles.tabButtonSideRight]}
                    onPress={() => goToMessage()}
                >
                    <Image
                        style={styles.tabImage}
                        source={
                            activeTab === 'message'
                                ? require('../../asset/icon/message-selected.png')
                                : require('../../asset/icon/message.png')
                        }
                    />
                    <Text style={styles.tabTitle}>消息</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tabButtonContainer, styles.tabButtonSmall]}
                    onPress={() => goToProfile()}
                >
                    <Image
                        style={styles.tabImage}
                        source={
                            activeTab === 'profile'
                                ? require('../../asset/icon/profile-selected.png')
                                : require('../../asset/icon/profile.png')
                        }
                    />
                    <Text style={styles.tabTitle}>我的</Text>
                </TouchableOpacity>
            </Animated.View>
        );
    }
}

// const Tab = ({ goToIndex, goToSquare, goToPublish, goToMessage, goToProfile, activeTab }) => (

// );

export default Tab;
