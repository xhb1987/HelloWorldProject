import React from 'react';
import { ScrollView, View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import { Button, Header, Icon, Divider, Avatar } from 'react-native-elements';
import HomeTabBarContainer from '../../components/tab-bar/tab-bar-container';

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: '#f0f0f0'
    },
    itemContainer: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1
    },
    avatarContainer: {
        height: 75.5
    },
    item: {
        height: 48
    },
    text: {
        fontSize: 17,
        color: '#333'
    },
    leftItem: {
        marginLeft: 11
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
});

const UserSettings = ({ navigator, userLogout, isLogin, goBack }) => (
    <View style={styles.viewContainer}>
        <Header
            outerContainerStyles={{
                borderBottomColor: '#ed3349',
                backgroundColor: '#ed3349'
            }}
            leftComponent={
                <Icon
                    type="entypo"
                    size={18}
                    name="chevron-thin-left"
                    color="white"
                    onPress={goBack}
                />
            }
            centerComponent={
                <HomeTabBarContainer
                    navigator={navigator}
                    textStyle={{
                        color: 'white',
                        fontSize: 18
                    }}
                    iconStyle={{
                        color: 'white',
                        size: 16
                    }}
                />
            }
        />
        <View style={styles.container}>
            <TouchableOpacity style={[styles.itemContainer, styles.avatarContainer]}>
                <Text style={styles.text}>我的头像</Text>
                <View style={styles.iconContainer}>
                    <Avatar rounded medium />
                    <Icon
                        containerStyle={{ marginLeft: 11 }}
                        type="entypo"
                        size={18}
                        name="chevron-thin-right"
                        color="#dddddd"
                    />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.itemContainer, styles.item]}>
                <Text style={styles.text}>我的昵称</Text>
                <View style={styles.iconContainer}>
                    <Text style={styles.text}>鞋子歪歪</Text>
                    <Icon
                        containerStyle={{ marginLeft: 11 }}
                        type="entypo"
                        size={18}
                        name="chevron-thin-right"
                        color="#dddddd"
                    />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.itemContainer, styles.item]}>
                <Text style={styles.text}>修改账号密码</Text>
                <View style={styles.iconContainer}>
                    <Icon type="entypo" size={18} name="chevron-thin-right" color="#dddddd" />
                </View>
            </TouchableOpacity>
        </View>
    </View>
);

export default UserSettings;
