import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

import ProductListContainer from '../product-list/product-list-container';

const BuyList = ({ products, navigator }) => (
    <View style={styles.container}>
        <ProductListContainer products={products} propsNavigatorObject={navigator} />
    </View>
);

BuyList.propTypes = {};

BuyList.defaultProps = {};

export default BuyList;