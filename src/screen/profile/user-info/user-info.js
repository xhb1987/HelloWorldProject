import React from 'react';
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import styles from './styles';

const UserInfo = ({ isLogin, user, userLogin }) => (
    <View style={styles.container}>
        {isLogin ? (
            <View>
                <Avatar medium rounded title={user.userID} activeOpacity={0.7} />
                <Text style={styles.title}>{user.userID}</Text>
            </View>
        ) : (
            <Avatar medium rounded title="请登陆" onPress={() => userLogin()} activeOpacity={0.7} />
        )}
    </View>
);

export default UserInfo;
