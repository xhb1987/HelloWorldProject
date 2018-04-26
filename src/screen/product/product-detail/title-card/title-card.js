import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from './styles';

const TitleCard = ({ productTitle, price }) => (
    <View style={styles.container}>
        <Text h4 style={styles.title}>
            {productTitle}
        </Text>
        <Text style={styles.price}>{price}</Text>
    </View>
);

TitleCard.propTypes = {
    productTitle: PropTypes.string,
    price: PropTypes.string
};

TitleCard.defaultProps = {
    productTitle: 'default product title',
    price: '0.00'
};

export default TitleCard;
