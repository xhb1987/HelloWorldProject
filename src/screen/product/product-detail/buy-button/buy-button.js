import React from 'react';
import { View, Button, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const BuyButton = ({ productOrderCallback }) => (
    <View style={styles.container}>
        <View style={styles.userContainer}>
            <Text>用户名</Text>
        </View>
        <View style={styles.buyButtonContainer}>
            <Button
                title="马上买"
                color="white"
                style={styles.buyButton}
                onPress={() => productOrderCallback()}
            />
        </View>
    </View>
);

BuyButton.propTypes = {
    productOrderCallback: PropTypes.func
};

BuyButton.defaultProps = {
    productOrderCallback: () => {}
};

export default BuyButton;
