import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import ConfirmButtonContainer from './confirm-button/confirm-button-container';
import styles from './styles';

const ProductOrder = ({ productTitle }) => (
    <View style={styles.container}>
        <ScrollView>
            <Text>{productTitle}</Text>
        </ScrollView>
        <ConfirmButtonContainer />
    </View>
);

ProductOrder.propTypes = {
    productTitle: PropTypes.string
};

ProductOrder.defaultProps = {
    productTitle: 'default title'
};

export default ProductOrder;
