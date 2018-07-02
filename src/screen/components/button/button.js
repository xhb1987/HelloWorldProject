import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import { Button } from 'react-native-elements';

const CustomButton = ({ title, buttonPress }) => (
    <Button
        title={title}
        onPress={buttonPress}
        backgroundColor="#ed3349"
        buttonStyle={{ borderRadius: 5, padding: 0, alignItems: 'center', justifyContent: 'center', height: 36 }}
    />
);

export default CustomButton;

CustomButton.PropsType = {
    title: PropTypes.string,
    buttonPress: PropTypes.func
};

CustomButton.defaultProps = {
    title: 'default title',
    leftButtonType: 'back',
    buttonPress: () => {}
};
