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
import { Avatar, Divider, Icon } from 'react-native-elements';
import { CachedImage } from 'react-native-cached-image';
import { currencyFormat } from '../../../../util/utils';
import ProductItem from './product-item/product-item';

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
        fontWeight: 'bold'
    },
    userStatus: {
        color: '#ababab'
    },
    title: {
        marginTop: 17.5,
        lineHeight: 20,
        fontSize: 16,
        flex: 1,
        alignItems: 'center'
    },
    imageContainer: {
        marginTop: 15
    },
    imgItem: {
        height: 150,
        width: Dimensions.get('screen').width,
        borderRadius: 5,
        backgroundColor: 'grey'
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5
    },
    price: {
        textAlign: 'right',
        fontSize: 17,
        fontWeight: 'bold',
        color: '#ed3349'
    },
    productContainer: {
        marginTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    product: {
        marginRight: 7,
        marginBottom: 15
    },
    prodcutLast: {
        marginRight: 0
    }
});

const Card = ({ item, clientConfig, onPressCallback, tags }) => (
    <View style={styles.container}>
        <View style={styles.contentContainer}>
            <TouchableOpacity activeOpacity={0.8} style={styles.titleContainer}>
                <View style={styles.userContainer}>
                    <Avatar
                        rounded
                        medium
                        containerStyle={styles.avatarContainer}
                        avatarStyle={styles.avatar}
                        activeOpacity={0.2}
                    />
                    <View style={styles.name}>
                        <Text style={styles.userName}>{item.name}</Text>
                    </View>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>进入店铺</Text>
                    <Icon
                        type="evilicon"
                        name="chevron-right"
                        color="#ed3349"
                        containerStyle={{ width: 20 }}
                    />
                </View>
            </TouchableOpacity>
            <View style={styles.productContainer}>
                <View style={styles.product}>
                    <ProductItem />
                </View>
                <View style={styles.product}>
                    <ProductItem />
                </View>
                <View style={[styles.product, styles.prodcutLast]}>
                    <ProductItem />
                </View>
                <View style={[styles.product, styles.prodcutLast]}>
                    <ProductItem />
                </View>
            </View>
        </View>
    </View>
);

export default Card;
