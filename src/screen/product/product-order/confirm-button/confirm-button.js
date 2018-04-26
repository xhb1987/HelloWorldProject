import React from 'react';
import PropTypes from 'prop-types';
import { View, Button, Text } from 'react-native';
import styles from './styles';

const ConfirmButton = ({ price }) => (
    <View style={styles.container}>
        <View style={styles.priceContainer}>
            <Text>{price}</Text>
        </View>
        <View style={styles.confirmButtonContainer}>
            <Button title="确认下单" color="white" onPress={() => {}} />
        </View>
    </View>
);

ConfirmButton.propTypes = {
    price: PropTypes.string
};

ConfirmButton.defaultProps = {
    price: '100'
};

export default ConfirmButton;
