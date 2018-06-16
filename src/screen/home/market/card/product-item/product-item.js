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
import { Avatar, Divider, Icon, Button } from 'react-native-elements';
import { CachedImage } from 'react-native-cached-image';

const styles = StyleSheet.create({
    container: {
        maxWidth: 110,
        borderColor: '#f0f0f0',
        borderWidth: 1,
        flexDirection: 'column',
        paddingVertical: 7.5
    },
    image: {
        height: 110,
        width: 110
    },
    contentContainer: {
        paddingHorizontal: 5
    },
    title: {
        fontWeight: '500',
        fontSize: 15,
        marginTop: 10
    },
    price: {
        marginTop: 8,
        color: '#ed3349',
        fontSize: 14
    },
    priceHighLight: {
        fontWeight: 'bold',
        fontSize: 15
    },
    buyButtonContainer: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    buyButton: {
        marginLeft: 0,
        marginRight: 0
        // maxWidth: 50,
        // height: 15,
    },
    button: {
        padding: 0,
        paddingHorizontal: 14,
        paddingVertical: 5,
        borderRadius: 5
    }
});

const ProductItem = ({ product }) => (
    <View style={styles.container}>
        <View style={styles.image} />
        <View style={styles.contentContainer}>
            <Text style={styles.title}>甜玉米两只</Text>
            <Text style={styles.price}>
                抢购价：<Text style={styles.priceHighLight}>¥6.9/包</Text>
            </Text>
            <View style={styles.buyButtonContainer}>
                <Button
                    fontSize={15}
                    title="购买"
                    onPress={() => {}}
                    backgroundColor="#ed3349"
                    buttonStyle={styles.button}
                    containerViewStyle={styles.buyButton}
                />

                <Icon type="evilicon" name="cart" size={25} color="#ed3349" />
            </View>
        </View>
    </View>
);

export default ProductItem;
