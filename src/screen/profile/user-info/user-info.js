import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 157 / 2,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    avatarContainer: {
        flexDirection: 'row'
    },
    avatarTitleContainer: {
        marginLeft: 11,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    titleContainer: {
        flexDirection: 'row'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 17,
        color: '#333'
    },
    certContainer: {
        borderWidth: 1,
        borderColor: '#ed3349',
        width: 55,
        height: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        borderRadius: 2
    },
    cert: {
        color: '#ed3349',
        fontSize: 10
    },
    address: {
        marginTop: 7.5,
        color: '#333',
        fontSize: 14
    },
    iconContainer: {
        flex: 1,
        alignItems: 'flex-end'
    }
});

const UserInfo = ({ isLogin, user, userLogin, userProfile }) => (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={isLogin ? userProfile : userLogin}>
        <View style={styles.avatarContainer}>
            <Avatar medium rounded activeOpacity={0.7} />
            {isLogin ? (
                <View style={styles.avatarTitleContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{user.id}</Text>
                        <View style={styles.certContainer}>
                            <Text style={styles.cert}>已认证</Text>
                        </View>
                    </View>
                    <Text style={styles.address}>2b4903室</Text>
                </View>
            ) : (
                <View style={styles.avatarTitleContainer}>
                    <Text style={styles.title}>请登陆</Text>
                </View>
            )}
        </View>
        <View style={styles.iconContainer}>
            <Icon type="entypo" size={18} name="chevron-thin-right" color="#dddddd" />
        </View>
    </TouchableOpacity>
);

export default UserInfo;
