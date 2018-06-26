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
import { currencyFormat } from '../../../../util/utils';

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
        marginTop: 17.5,
        lineHeight: 25,
        fontSize: 16,
        flex: 1,
        alignItems: 'center'
    },
    imageContainer: {
        marginTop: 15
    },
    imgItem: {
        height: 150,
        width: Dimensions.get('screen').width - 30,
        borderRadius: 5,
        backgroundColor: 'grey'
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
        alignItems: 'flex-end',
        paddingHorizontal: 15,
        paddingTop: 10
    },

    messageCount: {
        color: '#888888',
        fontSize: 15
    }
});

const Card = ({ item, clientConfig, onPressCallback, tags }) => (
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
                        <Text style={styles.userName}>{item.talkName}</Text>
                        <Text style={styles.userStatus}>{item.mda}</Text>
                    </View>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>期望价: ¥ {currencyFormat(item.oldPrice)}</Text>
                </View>
            </View>
            <Text style={styles.title}>
                【苹果笔记本电脑】收一台苹果笔记本电脑（如下图）要 求全新、1T硬盘、8G内存。
            </Text>
            <View style={styles.imageContainer}>
                <View style={styles.imgItem} />
                {/* <CachedImage style={styles.imgItem} /> */}
            </View>
            <View style={styles.messageContainer}>
                <Text style={[styles.message, styles.messageIndex]}>
                    趣购好东东: 我有你看看我的
                </Text>
                <Text style={styles.message}>主人回复：你那个电脑几成新？多少钱？</Text>
            </View>
        </View>
        <Divider height={1} backgroundColor={'#f0f0f0'} />
        <View style={styles.messageCountContainer}>
            <Text style={styles.messageCount}>9留言</Text>
        </View>
    </TouchableOpacity>
);

export default Card;
