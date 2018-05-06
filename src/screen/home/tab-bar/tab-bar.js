import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Button, Text } from 'react-native';
import styles from './styles';

const HomeTabBar = ({ city, village, openOption }) => (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
            <Button title={city.cityName} style={styles.text} onPress={() => openOption('city')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Button
                title={village.villageName}
                style={styles.text}
                onPress={() => openOption('village')}
            />
        </TouchableOpacity>
    </View>
);

HomeTabBar.propTypes = {
    city: PropTypes.objectOf(PropTypes.any),
    village: PropTypes.objectOf(PropTypes.any),
    openOption: PropTypes.func
};

HomeTabBar.defaultProps = {
    city: {
        cityName: '城市'
    },
    village: {
        villageName: '小区'
    },
    openOption: () => {}
};

export default HomeTabBar;
