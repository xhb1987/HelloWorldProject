import React from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import { FormLabel, FormInput, Button, Text } from 'react-native-elements';
import styles from './styles';

const UserLogin = ({ login, cancelLogin, goToRegister, userInputChange, user }) => (
    <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
        <FormLabel>用户名</FormLabel>
        <FormInput
            containerStyle={styles.inputContainer}
            keyboardType="phone-pad"
            onEndEditing={e => {
                userInputChange(e.nativeEvent.text, 'phone');
            }}
        />
        <FormLabel>密码</FormLabel>
        <FormInput
            containerStyle={styles.inputContainer}
            secureTextEntry={true}
            onEndEditing={e => {
                userInputChange(e.nativeEvent.text, 'password');
            }}
        />

        <View style={styles.buttonGroup}>
            <Button raised title="登陆" onPress={() => login(user)} backgroundColor="red" />
            <Button
                raised
                title="注册"
                onPress={() => goToRegister()}
                backgroundColor="transparent"
                color="black"
            />
        </View>
    </KeyboardAvoidingView>
);

export default UserLogin;
