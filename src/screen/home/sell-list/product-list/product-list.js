import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, StyleSheet, Dimensions, PixelRatio } from 'react-native';
import { Divider } from 'react-native-elements';
import Card from './card/card';

const ProductList = ({
    clientConfig,
    products,
    tags,
    productSelect,
    refreshProductList,
    loading,
    imageVersion
}) => (
    <FlatList
        data={products}
        renderItem={({ item, index }) => (
            <Card
                clientConfig={clientConfig}
                tags={tags}
                item={item}
                key={index}
                imageVersion={imageVersion}
                onPressCallback={() => productSelect(item)}
            />
        )}
        refreshing={loading}
        onRefresh={refreshProductList}
        keyExtractor={item => {
            return item.commodityID ? item.commodityID + '' : 'defaultKey';
        }}
        ItemSeparatorComponent={() => (
            <Divider style={{ backgroundColor: '#f0f0f0', height: 10 }} />
        )}
    />
);

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.any),
    onProductPress: PropTypes.func
};

ProductList.defaultProps = {
    products: [{}],
    onProductPress: () => {}
};

export default ProductList;
