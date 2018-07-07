import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width,
        height: 80,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0'
    },
    title: {
        fontSize: 18,
        marginBottom: 20
    }
});

const AppNotification = ({ notification }) => (
    <View style={styles.container}>
        <Text style={styles.title}>{notification}</Text>
    </View>
);

export default AppNotification;
