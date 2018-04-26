import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import ImageCarouselContainer from '../image-carousel/image-carousel-container';
import Card from '../../../component/common/card/card';
import styles from './styles';

const ProductList = ({ products, onProductPress }) => (
    <View style={styles.container}>
        <FlatList
            data={products}
            ListHeaderComponent={() => <ImageCarouselContainer />}
            renderItem={({ item }) => (
                <Card
                    item={item}
                    key={item.id}
                    name={item.user.name}
                    address={item.user.address}
                    onPressCallback={() => onProductPress(item)}
                />
            )}
            keyExtractor={item => item.id}
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
