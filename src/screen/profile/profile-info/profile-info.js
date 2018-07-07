import React from 'react';
import { ScrollView, TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';
import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {},
    itemContainer: {
        backgroundColor: 'white',
        borderTopColor: '#ddd',
        borderTopWidth: 1,
        paddingHorizontal: 10,
        height: 47.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    lastItemContainer: {
        borderBottomColor: '#ddd',
        borderBottomWidth: 1
    },
    icon: {
        width: 22,
        height: 22,
        resizeMode: 'contain',
        aspectRatio: 1,
        marginRight: 8
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 16,
        color: '#333'
    }
});

const ProfileInfo = ({
    user,
    isLogin,
    goToCertPage,
    goToPublishPage,
    goToInvolvePage,
    goToLoginPage
}) => (
    <View style={styles.container}>
        <TouchableOpacity
            style={styles.itemContainer}
            activeOpacity={0.8}
            onPress={isLogin ? goToPublishPage : goToLoginPage}
        >
            <View style={styles.iconContainer}>
                <Image style={styles.icon} source={require('../../../asset/icon/my-publish.png')} />
                <Text style={styles.title}>我的发布</Text>
            </View>
            <View style={styles.iconContainer}>
                <Icon type="entypo" size={18} name="chevron-thin-right" color="#dddddd" />
            </View>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.itemContainer}
            activeOpacity={0.8}
            onPress={isLogin ? goToInvolvePage : goToLoginPage}
        >
            <View style={styles.iconContainer}>
                <Image style={styles.icon} source={require('../../../asset/icon/involve.png')} />
                <Text style={styles.title}>我的参与</Text>
            </View>
            <View style={styles.iconContainer}>
                <Icon type="entypo" size={18} name="chevron-thin-right" color="#dddddd" />
            </View>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.itemContainer}
            activeOpacity={0.8}
            onPress={isLogin ? goToCertPage : goToLoginPage}
        >
            <View style={styles.iconContainer}>
                <Image style={styles.icon} source={require('../../../asset/icon/cert.png')} />
                <Text style={styles.title}>实名认证</Text>
            </View>
            <View style={styles.iconContainer}>
                <Icon type="entypo" size={18} name="chevron-thin-right" color="#dddddd" />
            </View>
        </TouchableOpacity>
        <TouchableOpacity
            style={[styles.itemContainer, styles.lastItemContainer]}
            activeOpacity={0.8}
        >
            <View style={styles.iconContainer}>
                <Image style={styles.icon} source={require('../../../asset/icon/settings.png')} />
                <Text style={styles.title}>设置</Text>
            </View>
            <View style={styles.iconContainer}>
                <Icon type="entypo" size={18} name="chevron-thin-right" color="#dddddd" />
            </View>
        </TouchableOpacity>
    </View>
);

export default ProfileInfo;
