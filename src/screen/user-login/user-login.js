import React from 'react';
import {
    View,
    StyleSheet,
    KeyboardAvoidingView,
    Dimensions,
    TouchableOpacity,
    Image
} from 'react-native';
import { FormLabel, FormInput, Button, Icon, Text, Divider } from 'react-native-elements';
import Header from '../components/header/header';

const styles = StyleSheet.create({
    container: {},
    register: {
        color: 'white',
        fontSize: 18
    },
    formContainer: {
        marginVertical: 30
    },
    inputViewContainer: {
        flexDirection: 'row',
        paddingHorizontal: 5,
        marginLeft: 10,
        marginRight: 10,
        marginVertical: 25
    },
    inputIconContainer: {
        flex: 1,
        paddingLeft: 10
    },
    inputContainer: {
        flex: 10
    },
    loginButton: {
        borderRadius: 5
    },
    loginThirdPartyContainer: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconGroupContainer: {
        marginVertical: 20,
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconButtonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconButton: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
        aspectRatio: 0.8
    },
    loginThirdPartyTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 40
    },
    loginThirdPartyTitle: {
        color: '#dddddd',
        fontSize: 16,
        flex: 2,
        textAlign: 'center'
    },
    buttonGroup: {
        marginTop: 20
    }
});

const UserLogin = ({ login, cancelLogin, goToRegister, userInputChange, user }) => (
    <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
        <Header
            title="用户登陆"
            leftButtonPress={cancelLogin}
            rightButton={
                <TouchableOpacity onPress={goToRegister}>
                    <Text style={styles.register}>注册</Text>
                </TouchableOpacity>
            }
        />
        <View style={styles.formContainer}>
            <View style={styles.inputViewContainer}>
                <Icon
                    size={28}
                    type="font-awesome"
                    name="user"
                    color="#cccccc"
                    containerStyle={styles.inputIconContainer}
                />
                <FormInput
                    placeholder="请输入手机号"
                    placeholderTextColor="#cccccc"
                    containerStyle={styles.inputContainer}
                    keyboardType="phone-pad"
                    onEndEditing={e => {
                        userInputChange(e.nativeEvent.text, 'loginPhone');
                    }}
                />
            </View>
            <View style={styles.inputViewContainer}>
                <Icon
                    size={28}
                    type="entypo"
                    name="lock"
                    color="#cccccc"
                    containerStyle={styles.inputIconContainer}
                />
                <FormInput
                    placeholder="请输入密码"
                    placeholderTextColor="#cccccc"
                    containerStyle={styles.inputContainer}
                    secureTextEntry
                    onEndEditing={e => {
                        userInputChange(e.nativeEvent.text, 'loginPassword');
                    }}
                />
            </View>
            <View style={styles.buttonGroup}>
                <Button
                    buttonStyle={styles.loginButton}
                    title="登陆"
                    onPress={() => login(user)}
                    backgroundColor="#ed3349"
                />
            </View>
        </View>
        <View style={styles.loginThirdPartyContainer}>
            <View style={styles.loginThirdPartyTitleContainer}>
                <Divider style={{ height: 1, backgroundColor: '#dddddd', flex: 1 }} />
                <Text style={styles.loginThirdPartyTitle}>第三方应用登陆</Text>
                <Divider style={{ height: 1, backgroundColor: '#dddddd', flex: 1 }} />
            </View>

            <View style={styles.iconGroupContainer}>
                <TouchableOpacity onPress={() => {}} style={styles.iconButtonContainer}>
                    <Image source={require('../../asset/wechat.png')} style={styles.iconButton} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}} style={styles.iconButtonContainer}>
                    <Image source={require('../../asset/qq.png')} style={styles.iconButton} />
                </TouchableOpacity>
            </View>
        </View>
    </KeyboardAvoidingView>
);

export default UserLogin;
