import React from 'react';
import {
    View,
    Image,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    PixelRatio
} from 'react-native';

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        width: Dimensions.get('window').width,
        height: 90 / PixelRatio.get(),
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
        zIndex: 5
    },

    tabButtonContainer: {
        flex: 5,
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 4,
        paddingVertical: 5,
        width: 150 / PixelRatio.get(),
        maxWidth: Dimensions.get('screen').width / 4
    },

    tabPublishContainer: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 7,
        position: 'absolute',
        height: 110 / PixelRatio.get(),
        bottom: 0,
        top: -15,
        width: 110 / PixelRatio.get(),
        left: Dimensions.get('screen').width / 2 - 30,
        borderRadius: 60,
        borderWidth: 0,
        borderTopWidth: 0,
        borderColor: '#f0f0f0',
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: -4
        },
        shadowRadius: 3,
        shadowOpacity: 0.1,
        zIndex: 0
    },

    tabButtonSmall: {
        flex: 1,
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
        aspectRatio: 0.7
    },
    imageBig: {
        marginTop: -3,
        marginBottom: 5,
        width: 95 / PixelRatio.get(),
        height: 95 / PixelRatio.get(),
        aspectRatio: 1
    }
});

const Tab = ({ goToIndex, goToSquare, goToPublish, goToMessage, goToProfile, activeTab }) => (
    <View style={styles.tabContainer}>
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
            <Text style={{ flex: 1, textAlign: 'center' }}>首页</Text>
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
            <Text style={{ flex: 1, textAlign: 'center' }}>广场</Text>
        </TouchableOpacity>
        <TouchableHighlight
            underlayColor={'white'}
            style={styles.tabPublishContainer}
            onPress={() => goToPublish()}
        >
            <Image style={[styles.imageBig]} source={require('../../asset/icon/publish.png')} />
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
            <Text style={{ flex: 1, textAlign: 'center' }}>消息</Text>
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
            <Text style={{ flex: 1, textAlign: 'center' }}>我的</Text>
        </TouchableOpacity>
    </View>
);

export default Tab;
