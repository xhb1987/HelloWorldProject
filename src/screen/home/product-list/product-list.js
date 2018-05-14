import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import { Divider } from 'react-native-elements';
import Card from './card/card';
import styles from './styles';

const ProductList = ({ clientConfig, products, tags, onProductPress }) => (
    <View style={styles.container}>
        <FlatList
            data={products}
            renderItem={({ item, index }) => (
                <Card
                    clientConfig={clientConfig}
                    tags={tags}
                    item={item}
                    key={index}
                    onPressCallback={() => onProductPress(item)}
                />
            )}
            keyExtractor={item => {
                return item.commodityID ? item.commodityID + '' : 'defaultKey';
            }}
            ItemSeparatorComponent={() => (
                <Divider style={{ backgroundColor: '#f0f0f0', height: 10 }} />
            )}
        />
    </View>
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
