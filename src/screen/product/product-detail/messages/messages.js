import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    Button
} from 'react-native';
import {
    Avatar,
    Icon
} from 'react-native-elements';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    container: {
        marginTop: 5
    },
    // title
    titleContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#efefef'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        paddingHorizontal: 20,
        paddingVertical: 10
    },

    // input
    messageInputContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    messageInput: {
        flex: 8,
        height: 30,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        marginRight: 10
    },
    messageButton: {
        flex: 2,
        height: 30,
        borderRadius: 5,
        backgroundColor: '#ed3349'
    }
});

const Messages = () => (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>留言</Text>
        </View>
        <View
            style={styles.messageInputContainer}
        >
            <View style={styles.messageInput}>
                <TextInput />
            </View>
            <View style={styles.messageButton}>
                <Button
                    title="留言"
                    color="white"
                />
            </View>
        </View>
    </View>
);

export default Messages;
