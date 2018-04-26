import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const HomeTabBar = ({ homeTitle, openOption }) => (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => openOption()}>
            <Text style={styles.text}>{homeTitle}</Text>
        </TouchableOpacity>
    </View>
);

HomeTabBar.propTypes = {
    homeTitle: PropTypes.string,
    openOption: PropTypes.func
};

HomeTabBar.defaultProps = {
    homeTitle: 'test title',
    openOption: () => {}
};

export default HomeTabBar;
