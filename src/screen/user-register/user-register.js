import React from 'react';
import {
    View,
    StyleSheet,
    KeyboardAvoidingView,
    Dimensions,
    TouchableOpacity,
    Image
} from 'react-native';
import {
    FormLabel,
    FormInput,
    Button,
    Icon,
    Text,
    Divider,
    FormValidationMessage
} from 'react-native-elements';
import Header from '../components/header/header';
import CodeButton from '../components/code-button/code-button';

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
        right: 32.5,
        bottom: 0,
        top: -10
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
    },
    termContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    term: {
        textDecorationLine: 'underline',
        fontWeight: 'bold'
    },
    loginContainer: {
        padding: 15,
        alignItems: 'flex-end'
    },
    loginText: {
        fontSize: 16,
        color: '#888888'
    },
    errorMsgContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    errorMsg: {
        fontSize: 16
    }
});

const UserRegister = ({
    phone,
    password,
    smsCode,
    cancel,
    user,
    userRegister,
    getRegisterCode,
    userInputChange,
    isLoading
}) => (
    <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
        <Header title="用户注册" leftButtonPress={cancel} leftButtonType="back" />
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
                    onChange={e => {
                        userInputChange(e.nativeEvent.text, 'phone');
                    }}
                />
            </View>
            {phone.data && !phone.validate ? (
                <FormValidationMessage
                    containerStyle={styles.errorMsgContainer}
                    style={styles.errorMsg}
                >
                    {' '}
                    {'请输入正确的手机号码'}
                </FormValidationMessage>
            ) : null}

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
                    onChange={e => {
                        userInputChange(e.nativeEvent.text, 'code');
                    }}
                />
                <View style={styles.codeButton}>
                    <CodeButton callback={() => getRegisterCode(phone)} />
                </View>
            </View>
            {smsCode.data && !smsCode.validate ? (
                <FormValidationMessage
                    containerStyle={styles.errorMsgContainer}
                    style={styles.errorMsg}
                >
                    {' '}
                    {'请输入6位数字验证码'}
                </FormValidationMessage>
            ) : null}
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
                    onChange={e => {
                        userInputChange(e.nativeEvent.text, 'password');
                    }}
                />
            </View>
            {password.data && !password.validate ? (
                <FormValidationMessage
                    containerStyle={styles.errorMsgContainer}
                    style={styles.errorMsg}
                >
                    {' '}
                    {'密码至少包含一个数字和一位字母， 至少6位， 最多20位'}
                </FormValidationMessage>
            ) : null}
            <View style={styles.termContainer}>
                <Text>请仔细阅读用户协议，注册则代表您同意</Text>
                <Text style={styles.term}>用户协议</Text>
            </View>
            <View style={styles.buttonGroup}>
                <Button
                    disabled={
                        !phone.validate || !password.validate || !smsCode.validate || isLoading
                    }
                    buttonStyle={styles.loginButton}
                    title="注册"
                    onPress={() => userRegister(user)}
                    backgroundColor="#ed3349"
                    loading={isLoading}
                    loadingRight
                />
            </View>
            <TouchableOpacity style={styles.loginContainer}>
                <Text style={styles.loginText}>已有账号？点击登陆</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
);

export default UserRegister;
