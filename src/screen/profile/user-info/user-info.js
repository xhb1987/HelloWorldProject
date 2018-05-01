import React from 'react';
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import styles from './styles';

const UserInfo = ({ isLogin, user, userLogin }) => (
    <View style={styles.container}>
        {isLogin ? (
            <View>
                <Avatar medium rounded title={user.name} activeOpacity={0.7} />
                <Text style={styles.title}>{user.name}</Text>
            </View>
        ) : (
            <Avatar medium rounded title="请登陆" onPress={() => userLogin()} activeOpacity={0.7} />
        )}
    </View>
);

export default UserInfo;
