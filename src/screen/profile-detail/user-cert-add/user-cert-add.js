import React from 'react';
import { ScrollView, View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import { Icon, Divider } from 'react-native-elements';
import Header from '../../components/header/header';
import Button from '../../components/button/button';
import HomeTabBarContainer from '../../components/tab-bar/tab-bar-container';

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column'
    },
    itemContainer: {
        backgroundColor: '#f0f0f0',
        height: 160,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    container: {
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 'auto',
        paddingHorizontal: 15
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20
    },
    title: {
        fontSize: 15,
        color: '#888888',
        lineHeight: 25
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

const UserCertAdd = ({ navigator, userLogout, isLogin, goBack, addCert }) => (
    <View style={styles.viewContainer}>
        <Header
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
            leftButtonType="back"
            leftButtonPress={goBack}
        />
        <View style={styles.titleContainer}>
            <Text style={styles.title}>请拍摄本人身份证和手持身份证正面照</Text>
        </View>
        <View style={styles.container}>
            <TouchableOpacity style={styles.itemContainer} activeOpacity={0.6}>
                <Icon type="entypo" name="plus" color="white" size={40} />
            </TouchableOpacity>
            <Divider style={{ height: 10, backgroundColor: 'white' }} />
            <TouchableOpacity style={styles.itemContainer} activeOpacity={0.6}>
                <Icon type="entypo" name="plus" color="white" size={40} />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    温馨提示：区选将尽快进行人工身份审核，并保证不会泄露你任何 个人信息
                </Text>
            </View>
        </View>
        <View style={styles.buttonContainer}>
            <Button title="添加认证" buttonPress={() => addCert()} />
        </View>
    </View>
);

export default UserCertAdd;
