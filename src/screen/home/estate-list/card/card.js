import React from 'react';
import lodash from 'lodash';
import {
    View,
    Text,
    TouchableOpacity,
    Alert,
    ScrollView,
    Image,
    StyleSheet,
    PixelRatio,
    Dimensions
} from 'react-native';
import { Avatar, Divider } from 'react-native-elements';
import { CachedImage } from 'react-native-cached-image';
import Tag from '../../../components/tag/tag';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingVertical: 10
    },
    contentContainer: {
        paddingHorizontal: 15
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    userContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },

    avatarContainer: {
        height: 50,
        width: 50,
        marginRight: 5
    },
    avatar: {
        borderRadius: 50
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5
    },
    userStatus: {
        color: '#ababab'
    },
    title: {
        marginTop: 15,
        lineHeight: 20,
        fontSize: 16,
        flex: 1,
        alignItems: 'center'
    },
    imageContainer: {
        marginTop: 15,
        flexDirection: 'row'
    },
    imgSmallContainer: {
        flexDirection: 'column',
        flex: 1,
        minWidth: 75
    },
    imgBigItem: {
        flex: 6,
        marginRight: 3,
        minWidth: 265,
        height: 158,
        borderRadius: 5,
        backgroundColor: 'grey'
    },
    imgSmallItem: {
        flex: 1,
        height: 77.5,
        borderRadius: 5,
        backgroundColor: 'grey',
        marginBottom: 3
    },
    priceContainer: {
        flexDirection: 'column',
        paddingVertical: 5
    },
    price: {
        textAlign: 'right',
        fontSize: 17,
        fontWeight: 'bold',
        color: '#ed3349',
        marginBottom: 5
    },
    priceOld: {
        textAlign: 'right',
        color: '#afafaf'
    },
    messageContainer: {
        height: 35,
        marginVertical: 15,
        paddingLeft: 5,
        borderLeftColor: '#eb2038',
        borderLeftWidth: 2,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    message: {
        color: '#888888',
        fontSize: 15
    },
    messageIndex: {
        marginBottom: 10
    },
    messageCountContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingTop: 10
    },

    messageCount: {
        color: '#888888',
        fontSize: 15
    }
});

const Card = ({ item, clientConfig, onPressCallback }) => (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
        <View style={styles.contentContainer}>
            <View style={styles.titleContainer}>
                <View style={styles.userContainer}>
                    <Avatar
                        rounded
                        medium
                        containerStyle={styles.avatarContainer}
                        avatarStyle={styles.avatar}
                        activeOpacity={0.2}
                    />

                    <View style={styles.name}>
                        <Text style={styles.userName}>本地测试用户</Text>
                        <Text style={styles.userStatus}>在线</Text>
                    </View>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>面议</Text>
                </View>
            </View>

            <View style={styles.imageContainer}>
                <View style={styles.imgBigItem} />
                <View style={styles.imgSmallContainer}>
                    <View style={styles.imgSmallItem} />
                    <View style={styles.imgSmallItem} />
                </View>
                {/* <CachedImage style={styles.imgItem} /> */}
            </View>
            <Text style={styles.title}>
                【南茂花园】靠近南山地铁站房源，环境优美。中山公园 附近，了解一下
            </Text>
        </View>

        <View style={styles.messageCountContainer}>
            <Tag contant="租房" />
            <Text style={styles.messageCount}>9 留言</Text>
        </View>
    </TouchableOpacity>
);

export default Card;
