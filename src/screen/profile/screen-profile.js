import React from 'react';
import { ScrollView, View, StyleSheet, Dimensions } from 'react-native';
import { Button, Icon, Divider } from 'react-native-elements';
import Header from '../components/header/header';
import HomeTabBarContainer from '../components/tab-bar/tab-bar-container';
import ProfileInfoContainer from './profile-info/profile-info-container';
import UserInfoContainer from './user-info/user-info-container';
import TabWrapper from '../../component/tab-wrapper/tab-wrapper';

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: '#f0f0f0'
    }
});

const ScreenProfile = ({ navigator, userLogout, isLogin }) => (
    <TabWrapper navigator={navigator}>
        <View style={styles.viewContainer}>
            <Header
                leftButtonType="none"
                centerComponent={
                    <HomeTabBarContainer
                        navigator={navigator}
                        textStyle={{
                            color: 'white',
                            fontSize: 15
                        }}
                        iconStyle={{
                            color: 'white',
                            size: 16
                        }}
                    />
                }
                outerContainerStyles={{
                    height: 56,
                    paddingBottom: 10
                }}
            />
            <View style={styles.container}>
                <UserInfoContainer navigator={navigator} />
                <Divider style={{ backgroundColor: '#f0f0f0', height: 12.5 }} />
                <ProfileInfoContainer navigator={navigator} />
                {isLogin ? (
                    <Button
                        backgroundColor={'#ed3349'}
                        title="登出"
                        onPress={() => userLogout()}
                        containerViewStyle={{ marginVertical: 10 }}
                    />
                ) : null}
            </View>
        </View>
    </TabWrapper>
);

export default ScreenProfile;
