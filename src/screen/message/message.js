import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

const Message = ({ homeTitle }) => (
    <View>
        <Text>{homeTitle}</Text>
    </View>
);

Message.propTypes = {
    homeTitle: PropTypes.string
};

Message.defaultProps = {
    homeTitle: 'Default Title'
};

export default Message;
