import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from './styles';

const ProductTabBar = ({ productTitle }) => (
    <View style={styles.container}>
        <Text style={styles.text}>{productTitle}</Text>
    </View>
);

ProductTabBar.propTypes = {
    productTitle: PropTypes.string
};

ProductTabBar.defaultProps = {
    productTitle: 'test title'
};

export default ProductTabBar;
