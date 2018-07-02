import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, StyleSheet, Dimensions, PixelRatio } from 'react-native';
import { Divider } from 'react-native-elements';
import Card from '../card/card';

const SellList = ({ clientConfig, products, productSelect, imageVersion, myType }) => (
    <FlatList
        style={{ minHeight: 200 }}
        data={products}
        renderItem={({ item, index }) => (
            <Card
                clientConfig={clientConfig}
                item={item}
                key={index}
                imageVersion={imageVersion}
                onPressCallback={() => productSelect(item)}
                type={myType}
            />
        )}
        keyExtractor={item => {
            return item.commodityID ? item.commodityID + '' : 'defaultKey';
        }}
        ItemSeparatorComponent={() => (
            <Divider style={{ backgroundColor: '#f0f0f0', height: 10 }} />
        )}
    />
);

SellList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.any),
    onProductPress: PropTypes.func
};

SellList.defaultProps = {
    products: [{}],
    onProductPress: () => {}
};

export default SellList;
