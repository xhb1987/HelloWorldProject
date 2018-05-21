import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Bubble } from 'react-native-gifted-chat';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    userLeftContainer: {
        flex: 1,
        alignItems: 'flex-start'
    },
    userRightContainer: {
        flex: 1,
        alignItems: 'flex-end'
    }
});

const CustomBubble = props => (
    <View style={styles.container}>
        <Bubble
            {...props}
            wrapperStyle={{
                left: {
                    borderRadius: 10,
                    minHeight: 35,
                    alignItems: 'center',
                    borderColor: '#bbbbbb',
                    justifyContent: 'center',
                    borderWidth: 1,
                    backgroundColor: 'white'
                },
                right: {
                    borderRadius: 10,
                    minHeight: 35,
                    alignItems: 'center',
                    borderColor: '#bbbbbb',
                    justifyContent: 'center',
                    borderWidth: 1,
                    backgroundColor: 'white'
                }
            }}
        />
    </View>
);

export default CustomBubble;
