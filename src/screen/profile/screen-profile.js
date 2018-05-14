import React from 'react';
import { ScrollView, Button, View, Text } from 'react-native';
import ProfileInfoContainer from './profile-info/profile-info-container';
import UserInfoContainer from './user-info/user-info-container';
import TabContainer from '../tabs/tabs-container';
import styles from './styles';

const ScreenProfile = ({ navigator, userLogout }) => (
    <View style={styles.viewContainer}>
        <ScrollView>
            <UserInfoContainer navigator={navigator} />
            <ProfileInfoContainer />
            <Button title="登出" onPress={() => userLogout()} />
        </ScrollView>
        <TabContainer navigator={navigator} />
    </View>
);

export default ScreenProfile;
