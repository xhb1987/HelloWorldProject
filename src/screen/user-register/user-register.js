import React from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import { FormLabel, FormInput, Button, Text } from 'react-native-elements';
import styles from './styles';

const UserRegister = ({ userRegister, getRegisterCode, userInputChange }) => (
    <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
        <View style={styles.phoneGroup}>
            <FormLabel>电话号码</FormLabel>
            <FormInput
                containerStyle={styles.inputContainer}
                keyboardType="phone-pad"
                onEndEditing={e => {
                    userInputChange(e.nativeEvent.text, 'phone');
                }}
            />
        </View>
        <View style={styles.codeButtonGroup}>
            <FormLabel>验证码</FormLabel>
            <FormInput
                keyboardType="numeric"
                containerStyle={styles.codeInput}
                onEndEditing={e => {
                    userInputChange(e.nativeEvent.text, 'code');
                }}
            />
            <Button title="验证码" onPress={() => getRegisterCode()} style={styles.codeButton} />
        </View>

        <View style={styles.codeButtonGroup}>
            <FormLabel>密码</FormLabel>
            <FormInput
                containerStyle={styles.inputContainer}
                secureTextEntry={true}
                onEndEditing={e => {
                    userInputChange(e.nativeEvent.text, 'password');
                }}
            />
        </View>

        <View style={styles.codeButtonGroup}>
            <FormLabel>再次输入密码</FormLabel>
            <FormInput
                containerStyle={styles.inputContainer}
                secureTextEntry={true}
                onEndEditing={e => {
                    userInputChange(e.nativeEvent.text, 'passwordRepeat');
                }}
            />
        </View>

        <View style={styles.buttonGroup}>
            <Button raised title="注册" onPress={() => userRegister()} backgroundColor="red" />
        </View>
    </KeyboardAvoidingView>
);

export default UserRegister;
