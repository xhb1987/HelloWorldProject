import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, Icon } from 'react-native-elements';

const CustomHeader = ({ title, leftButtonType, leftButtonPress }) => (
    <Header
        outerContainerStyles={{
            borderBottomColor: 'white',
            backgroundColor: '#ed3349'
        }}
        leftComponent={
            <Icon
                type="entypo"
                size={18}
                name="chevron-thin-left"
                color="white"
                onPress={leftButtonPress}
            />
        }
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
