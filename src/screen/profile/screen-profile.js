import React from 'react';
import { ScrollView, View, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import ProfileInfoContainer from './profile-info/profile-info-container';
import UserInfoContainer from './user-info/user-info-container';
import TabWrapper from '../../component/tab-wrapper/tab-wrapper';
import Header from '../components/header/header';

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1
    },
    container: {
        height: Dimensions.get('screen').height
    }
});

const ScreenProfile = ({ navigator, userLogout, isLogin }) => (
    <TabWrapper navigator={navigator}>
        <View style={styles.viewContainer}>
            <ScrollView style={styles.container}>
                <UserInfoContainer navigator={navigator} />
                <ProfileInfoContainer />
                {isLogin ? (
                    <Button
                        backgroundColor={'#ed3349'}
                        title="登出"
                        onPress={() => userLogout()}
                        containerViewStyle={{ marginVertical: 10 }}
                    />
                ) : null}
            </ScrollView>
        </View>
    </TabWrapper>
);

export default ScreenProfile;
