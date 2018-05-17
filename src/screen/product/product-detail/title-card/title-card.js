import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from './styles';

const TitleCard = ({ product }) => (
    <View style={styles.container}>
        <Text h4 style={styles.title}>
            {product.commodityTitle}
        </Text>
        <Text style={styles.price}>{product.nowPrice}</Text>
        <Text>全新价：{product.oldPrice}</Text>
    </View>
);

TitleCard.propTypes = {
    product: PropTypes.objectOf(PropTypes.any)
};

TitleCard.defaultProps = {
    product: {
        title: 'default product title',
        nowPrice: 0,
        oldPrice: 0
    }
};

export default TitleCard;
