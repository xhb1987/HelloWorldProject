import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import Tag from '../../../components/tag/tag';
import { stringToArray, findTagName, currencyFormat } from '../../../../util/utils';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    title: {
        marginBottom: 10,
        minHeight: 30,
        fontSize: 18
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    tagContainer: {
        flexDirection: 'row'
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    price: {
        color: '#ed3349',
        fontSize: 18
    },
    oldPriceTitle: {
        color: '#afafaf',
        fontSize: 14,
        marginLeft: 5
    },
    oldPrice: {
        textDecorationLine: 'line-through'
    }
});

const TitleCard = ({ product, tags }) => (
    <View style={styles.container}>
        <Text style={styles.title}>{product.commodityTitle}</Text>
        <View style={styles.footerContainer}>
            <View style={styles.tagContainer}>
                {stringToArray(product.labels).map(tag => (
                    <Tag key={tag} contant={findTagName(tags, tag)} />
                ))}
            </View>
            <View style={styles.priceContainer}>
                <Text style={styles.price}>¥ {currencyFormat(product.nowPrice)}</Text>
                <Text style={styles.oldPriceTitle}>
                    全新价：<Text style={styles.oldPrice}>
                        ¥ {currencyFormat(product.oldPrice)}
                    </Text>
                </Text>
            </View>
        </View>
    </View>
);

TitleCard.propTypes = {
    product: PropTypes.objectOf(PropTypes.any),
    tags: PropTypes.arrayOf(PropTypes.any)
};

TitleCard.defaultProps = {
    product: {
        title: 'default product title',
        nowPrice: 0,
        oldPrice: 0
    },
    tags: []
};

export default TitleCard;
