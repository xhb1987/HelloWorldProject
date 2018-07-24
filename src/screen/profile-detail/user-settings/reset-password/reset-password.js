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
import Header from '../../../components/header/header';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    register: {
        color: 'white',
        fontSize: 18
    },
    pageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    formContainer: {
        marginVertical: 30,
        alignItems: 'center',
        justifyContent: 'center'
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
    input: {
        maxWidth: Dimensions.get('screen').width - 30 - 62
    },
    passwordInput: {
        paddingRight: 50
    },
    eyeButton: {
        position: 'absolute',
        right: 27.5,
        top: 5,
        width: 35
    },
    loginButton: {
        borderRadius: 5
    },
    loginThirdPartyContainer: {
        height: 150,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    iconGroupContainer: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconButtonContainer: {
        flex: 1,
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconButton: {
        flex: 1,
        width: 50,
        height: 50
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
        width: Dimensions.get('screen').width,
        marginTop: 20
    },
    errorMsgContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    errorMsg: {
        fontSize: 16
    }
});

const ResetPassword = ({
    userInputChange,
    user,
    isLoading,
    passwordSecured,
    passwordSecuredToggle,
    goBack
}) => (
    <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
        <Header title="修改密码" leftButtonPress={goBack} leftButtonType="back" />
        <View style={styles.pageContainer}>
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
                        inputStyle={styles.input}
                        keyboardType="phone-pad"
                        onChange={e => {
                            userInputChange(e.nativeEvent.text, 'phone');
                        }}
                    />
                </View>
                {user.phone.data && !user.phone.validate ? (
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
                        type="entypo"
                        name="lock"
                        color="#cccccc"
                        containerStyle={styles.inputIconContainer}
                    />
                    <FormInput
                        blurOnSubmit
                        placeholder="请输入旧密码"
                        placeholderTextColor="#cccccc"
                        inputStyle={[styles.input, styles.passwordInput]}
                        containerStyle={styles.inputContainer}
                        secureTextEntry={passwordSecured}
                        onChange={e => {
                            userInputChange(e.nativeEvent.text, 'oldPassword');
                        }}
                    />
                    <TouchableOpacity
                        style={styles.eyeButton}
                        onPress={() => passwordSecuredToggle(passwordSecured)}
                    >
                        <Icon type="entypo" name="eye" color="#ccc" />
                    </TouchableOpacity>
                </View>
                {user.password.data && !user.password.validate ? (
                    <FormValidationMessage
                        containerStyle={styles.errorMsgContainer}
                        style={styles.errorMsg}
                    >
                        {' '}
                        {'密码至少包含一个数字和一位字母， 至少6位， 最多20位'}
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
                        blurOnSubmit
                        placeholder="请输入新密码"
                        placeholderTextColor="#cccccc"
                        inputStyle={[styles.input, styles.passwordInput]}
                        containerStyle={styles.inputContainer}
                        secureTextEntry={passwordSecured}
                        onChange={e => {
                            userInputChange(e.nativeEvent.text, 'password');
                        }}
                    />
                    <TouchableOpacity
                        style={styles.eyeButton}
                        onPress={() => passwordSecuredToggle(passwordSecured)}
                    >
                        <Icon type="entypo" name="eye" color="#ccc" />
                    </TouchableOpacity>
                </View>
                {user.password.data && !user.password.validate ? (
                    <FormValidationMessage
                        containerStyle={styles.errorMsgContainer}
                        style={styles.errorMsg}
                    >
                        {' '}
                        {'密码至少包含一个数字和一位字母， 至少6位， 最多20位'}
                    </FormValidationMessage>
                ) : null}
                <View style={styles.buttonGroup}>
                    <Button
                        disabled={!user.phone.validate || !user.password.validate || isLoading}
                        buttonStyle={styles.loginButton}
                        title="确认"
                        onPress={() => {}}
                        backgroundColor="#ed3349"
                        loading={isLoading}
                        loadingRight
                    />
                </View>
            </View>
        </View>
    </KeyboardAvoidingView>
);

export default ResetPassword;
