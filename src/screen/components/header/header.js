import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import { Header, Icon } from 'react-native-elements';

const leftComponentElement = (leftButtonType, leftButtonPress) => {
    if (leftButtonType === 'cancel') {
        return (
            <TouchableOpacity onPress={leftButtonPress}>
                <Text style={{ fontSize: 18, color: '#fff' }}>取消</Text>
            </TouchableOpacity>
        );
    }

    if (leftButtonType === 'back') {
        return (
            <TouchableOpacity
                onPress={leftButtonPress}
                activeOpacity={1}
                style={{
                    flex: 1,
                    alignItems: 'flex-start',
                    justifyContent: 'flex-end',
                    minWidth: 30
                }}
            >
                <Icon type="entypo" size={18} name="chevron-thin-left" color="white" />
            </TouchableOpacity>
        );
    }

    return null;
};

const CustomHeader = ({ title, leftButtonType, leftButtonPress, rightButton }) => (
    <Header
        outerContainerStyles={{
            borderBottomColor: '#ed3349',
            backgroundColor: '#ed3349'
        }}
        leftComponent={leftComponentElement(leftButtonType, leftButtonPress)}
        rightComponent={React.isValidElement(rightButton) ? rightButton : null}
        centerComponent={{
            text: title,
            style: { color: 'white', fontSize: 18 }
        }}
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
