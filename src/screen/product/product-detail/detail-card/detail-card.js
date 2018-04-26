import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Text } from 'react-native-elements';
import styles from './styles';

const DetailCard = ({ productDescription }) => (
    <View style={styles.container}>
        <Text style={styles.title}>商品详情</Text>
        <Text style={styles.content}>{productDescription}</Text>
    </View>
);

DetailCard.propTypes = {
    productDescription: PropTypes.string
};

DetailCard.defaultProps = {
    productDescription: 'default description'
};

export default DetailCard;
