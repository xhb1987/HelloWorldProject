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
                height: 30,
                width: 30,
                borderRadius: 3
            },
            right: {
                height: 30,
                width: 30,
                borderRadius: 3
            }
        }}
    />
);

export default CustomAvatar;
