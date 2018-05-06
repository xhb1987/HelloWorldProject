import React from 'react';
import { ScrollView, Button } from 'react-native';
import ProfileInfoContainer from './profile-info/profile-info-container';
import UserInfoContainer from './user-info/user-info-container';
import styles from './styles';

const ScreenProfile = ({ navigator, userLogout }) => (
    <ScrollView style={styles.container}>
        <UserInfoContainer navigator={navigator} />
        <ProfileInfoContainer />
        <Button title="登出" onPress={() => userLogout()} />
    </ScrollView>
);

export default ScreenProfile;
