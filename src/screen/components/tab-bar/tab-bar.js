import React from 'react';
import PropTypes from 'prop-types';
import {
    TouchableOpacity,
    Text
} from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './styles';

const HomeTabBar = ({
    showModal,
    homeTitle,
    textStyle,
    iconStyle
}) => (
    <TouchableOpacity
        style={{
            flexDirection: 'row',
            justifyContent: 'center'
        }}
        onPress={() => showModal()}
    >
        <Text style={[styles.text, textStyle]}>
            {homeTitle}
        </Text>
        <Icon
            name="chevron-down"
            type="evilicon"
            color={
                iconStyle
                    ? iconStyle.color
                    : '#666'
            }
            size={iconStyle ? iconStyle.size : 18}
            containerStyle={{
                marginLeft: -3,
                height: 16
            }}
        />
    </TouchableOpacity>
);

export default HomeTabBar;