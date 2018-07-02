import React from 'react';
import { ScrollView, View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import { Icon, Divider } from 'react-native-elements';
import Header from '../../components/header/header';
import Button from '../../components/button/button';

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        flexDirection: 'column'
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
    container: {
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 'auto'
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
    },
    buttonContainer: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: 'auto',
        marginBottom: 75
    }
});

const UserCert = ({ navigator, userLogout, isLogin, goBack, goToAddCert }) => (
    <View style={styles.viewContainer}>
        <Header title="我的认证" leftButtonType="back" leftButtonPress={goBack} />
        <View style={styles.container}>
            <TouchableOpacity style={[styles.itemContainer, styles.item]}>
                <Text style={styles.text}>2栋B单元403室</Text>
                <View style={styles.iconContainer}>
                    <Icon type="entypo" size={18} name="chevron-thin-right" color="#dddddd" />
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
            <Button title="添加认证" buttonPress={goToAddCert} />
        </View>
    </View>
);

export default UserCert;
