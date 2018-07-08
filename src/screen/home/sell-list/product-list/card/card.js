import React from 'react';
import lodash from 'lodash';
import { View, Text, TouchableOpacity, Alert, ScrollView, Image, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import { CachedImage } from 'react-native-cached-image';
import Tag from '../../../../components/tag/tag';
import { stringToArray, findTagName, currencyFormat } from '../../../../../util/utils';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingVertical: 11,
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
    user: {
        // verticalAlign: 'middle'
    },
    userName: {
        fontSize: 16,
        marginBottom: 5
    },
    userStatus: {
        color: '#ababab'
    },
    title: {
        marginTop: 14,
        lineHeight: 25,
        fontSize: 15,
        flex: 1,
        alignItems: 'center'
    },

    imageContainer: {
        marginTop: 15
    },
    imgItem: {
        height: 105,
        width: 117.5,
        borderRadius: 5,
        marginRight: 10
    },
    tagContainer: {
        marginTop: 5,
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
        color: '#ed3349',
        marginBottom: 5
    },
    priceOld: {
        textAlign: 'right',
        color: '#afafaf'
    },

    priceOldLine: {
        fontSize: 14,
        textDecorationLine: 'line-through',
        paddingLeft: 10
    }
});

const Card = ({ item, clientConfig, onPressCallback, tags, imageVersion }) => (
    <TouchableOpacity
        style={styles.container}
        activeOpacity={0.8}
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
                        <Image
                            source={{
                                uri: `${clientConfig}${img}?version=${imageVersion}`,
                                cache: 'reload'
                            }}
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
