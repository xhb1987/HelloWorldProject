import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import { Header, Icon } from 'react-native-elements';

const CustomHeader = ({ title, leftButtonType, leftButtonPress, rightButton }) => (
    <Header
        outerContainerStyles={{
            borderBottomColor: 'white',
            backgroundColor: '#ed3349'
        }}
        leftComponent={
            leftButtonType === 'cancel' ? (
                <TouchableOpacity onPress={leftButtonPress}>
                    <Text style={{ fontSize: 18, color: '#fff' }}>取消</Text>
                </TouchableOpacity>
            ) : (
                <Icon
                    type="entypo"
                    size={18}
                    name="chevron-thin-left"
                    color="white"
                    onPress={leftButtonPress}
                />
            )
        }
        rightComponent={React.isValidElement(rightButton) ? rightButton : null}
        centerComponent={{ text: title, style: { color: 'white', fontSize: 18 } }}
    />
);

export default CustomHeader;

CustomHeader.PropsType = {
    title: PropTypes.string,
    leftButtonType: PropTypes.string,
    leftButtonPress: PropTypes.func
};

CustomHeader.defaultProps = {
    title: 'default title',
    leftButtonType: 'back',
    leftButtonPress: () => {}
};
