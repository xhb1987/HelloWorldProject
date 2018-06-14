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
    PixelRatio
} from 'react-native';
import { Avatar } from 'react-native-elements';
import { CachedImage } from 'react-native-cached-image';
import Tag from '../../../../components/tag/tag';
import { stringToArray, findTagName, currencyFormat } from '../../../../../util/utils';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingVertical: 22 / PixelRatio.get(),
        paddingHorizontal: 30 / PixelRatio.get()
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
        height: 100 / PixelRatio.get(),
        width: 100 / PixelRatio.get(),
        marginRight: 10 / PixelRatio.get()
    },
    avatar: {
        borderRadius: 50
    },
    user: {
        // verticalAlign: 'middle'
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10 / PixelRatio.get()
    },
    userStatus: {
        color: '#ababab'
    },
    title: {
        marginTop: 35 / PixelRatio.get(),
        lineHeight: 20,
        fontSize: 16,
        flex: 1,
        alignItems: 'center'
    },

    imageContainer: {
        marginTop: 30 / PixelRatio.get()
    },
    imgItem: {
        height: 210 / PixelRatio.get(),
        width: 235 / PixelRatio.get(),
        borderRadius: 5,
        marginRight: 20 / PixelRatio.get()
    },
    tagContainer: {
        marginTop: 25 / PixelRatio.get(),
        flexDirection: 'row',
        borderRadius: 5
    },
    priceContainer: {
        flexDirection: 'column',
        paddingVertical: 5
    },
    price: {
        textAlign: 'right',
        fontSize: 17,
        fontWeight: 'bold',
        color: '#ed3349'
    },
    priceOld: {
        textAlign: 'right',
        color: '#afafaf'
    },

    priceOldLine: {
        fontSize: 14,
        textDecorationLine: 'line-through'
    }
});

const Card = ({ item, clientConfig, onPressCallback, tags }) => (
    <TouchableOpacity
        style={styles.container}
        onPress={() => {
            onPressCallback(item);
        }}
    >
        <View>
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
                    <Text style={styles.price}>¥ {currencyFormat(item.nowPrice)}</Text>
                    <Text style={styles.priceOld}>
                        全新价:
                        <Text style={styles.priceOldLine}>¥ {currencyFormat(item.oldPrice)}</Text>
                    </Text>
                </View>
            </View>
            <ScrollView horizontal>
                {stringToArray(item.fileNames).map(img => (
                    <View key={img} style={styles.imageContainer}>
                        <CachedImage
                            source={{ uri: clientConfig + lodash.trim(img, '"') }}
                            style={styles.imgItem}
                        />
                    </View>
                ))}
            </ScrollView>
            <Text style={styles.title}>{item.commodityTitle}</Text>
            {item.labels ? (
                <View style={styles.tagContainer}>
                    {stringToArray(item.labels).map(tag => (
                        <Tag key={tag} contant={findTagName(tags, tag)} />
                    ))}
                </View>
            ) : null}
        </View>
    </TouchableOpacity>
);

export default Card;
