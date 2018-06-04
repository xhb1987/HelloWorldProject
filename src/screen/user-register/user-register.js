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
    codeInputContainer: {},
    loginButton: {
        borderRadius: 5
    },
    codeButton: {
        position: 'absolute',
        right: 25,
        bottom: 2,
        top: 0,
        paddingHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#dddddd'
    },
    codeTItle: {
        color: '#3e3e3e',
        fontSize: 16
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

const UserRegister = ({ cancel, userRegister, getRegisterCode, userInputChange }) => (
    <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
        <Header title="用户注册" leftButtonPress={cancel} />
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
                        userInputChange(e.nativeEvent.text, 'phone');
                    }}
                />
            </View>
            <View style={styles.inputViewContainer}>
                <Icon
                    size={28}
                    type="octicon"
                    name="shield"
                    color="#cccccc"
                    containerStyle={styles.inputIconContainer}
                />
                <FormInput
                    placeholder="请输入验证码"
                    placeholderTextColor="#cccccc"
                    containerStyle={[styles.inputContainer, styles.codeInputContainer]}
                    secureTextEntry
                    onEndEditing={e => {
                        userInputChange(e.nativeEvent.text, 'code');
                    }}
                />
                <TouchableOpacity style={styles.codeButton}>
                    <Text style={styles.codeTItle}>获取验证码</Text>
                </TouchableOpacity>
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
                        userInputChange(e.nativeEvent.text, 'password');
                    }}
                />
            </View>
            <View style={styles.buttonGroup}>
                <Button
                    buttonStyle={styles.loginButton}
                    title="注册"
                    onPress={() => userRegister()}
                    backgroundColor="#ed3349"
                />
            </View>
        </View>
    </KeyboardAvoidingView>
);

export default UserRegister;
