import React from 'react';
import { Avatar } from 'react-native-gifted-chat';

const CustomAvatar = props => (
    <Avatar
        {...props}
        containerStyle={{
            left: {
                marginRight: 0
            },
            right: {
                marginLeft: 0
            }
        }}
        imageStyle={{
            left: {
                height: 40,
                width: 40,
                borderRadius: 3
            },
            right: {
                height: 40,
                width: 40,
                borderRadius: 3
            }
        }}
    />
);

export default CustomAvatar;
