import React from 'react';
import { View, Text, Button } from 'react-native';
import ProfileInfoContainer from './profile-info/profile-info-container';
import styles from './styles';

const ScreenProfile = ({ isLogin, userLogin }) => (
    <View style={styles.container}>
        {isLogin ? (
            <ProfileInfoContainer />
        ) : (
            <Button title="Log in" onPress={() => userLogin()}>
                <Text>Log in</Text>
            </Button>
        )}
    </View>
);

export default ScreenProfile;
