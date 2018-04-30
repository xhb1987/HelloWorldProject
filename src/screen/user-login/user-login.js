import React from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import { FormLabel, FormInput, Button, Text } from 'react-native-elements';
import styles from './styles';

const UserLogin = ({ login, cancelLogin }) => (
    <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
        <FormLabel>用户名</FormLabel>
        <FormInput containerStyle={styles.inputContainer} />
        <FormLabel>密码</FormLabel>
        <FormInput containerStyle={styles.inputContainer} />

        <View style={styles.buttonGroup}>
            <Button raised title="登陆" onPress={() => login()} backgroundColor="red" />
        </View>
    </KeyboardAvoidingView>
);

export default UserLogin;
