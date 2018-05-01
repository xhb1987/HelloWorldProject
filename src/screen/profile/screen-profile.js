import React from 'react';
import { ScrollView } from 'react-native';
import ProfileInfoContainer from './profile-info/profile-info-container';
import UserInfoContainer from './user-info/user-info-container';
import styles from './styles';

const ScreenProfile = ({ navigator }) => (
    <ScrollView style={styles.container}>
        <UserInfoContainer navigator={navigator} />
        <ProfileInfoContainer />
    </ScrollView>
);

export default ScreenProfile;
