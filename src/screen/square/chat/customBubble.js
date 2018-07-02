import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Bubble } from 'react-native-gifted-chat';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: 2,
        marginBottom: 20
    },
    userLeftContainer: {
        flex: 1,
        alignItems: 'flex-start'
    },
    userRightContainer: {
        flex: 1,
        alignItems: 'flex-end'
    },
    userName: {
        marginBottom: 3,
        fontSize: 15,
        color: '#6b6b6b'
    },
    bubbleTriangleWhiteLeft: {
        position: 'absolute',
        left: 2,
        top: -5,
        width: 0,
        height: 0,
        borderTopColor: 'transparent',
        borderTopWidth: 5,
        borderRightWidth: 8,
        borderRightColor: 'white',
        borderBottomWidth: 5,
        borderBottomColor: 'transparent'
    },
    bubbleTriangleLeft: {
        position: 'absolute',
        left: -7,
        top: 30,
        width: 0,
        height: 0,
        borderTopColor: 'transparent',
        borderTopWidth: 5,
        borderRightWidth: 8,
        borderRightColor: '#bbb',
        borderBottomWidth: 5,
        borderBottomColor: 'transparent',
        zIndex: 1
    },
    bubbleTriangleWhiteRight: {
        position: 'absolute',
        right: 2,
        top: -5,
        width: 0,
        height: 0,
        borderTopColor: 'transparent',
        borderTopWidth: 5,
        borderLeftWidth: 8,
        borderLeftColor: 'white',
        borderBottomWidth: 5,
        borderBottomColor: 'transparent'
    },
    bubbleTriangleRight: {
        position: 'absolute',
        right: -7,
        top: 30,
        width: 0,
        height: 0,
        borderTopColor: 'transparent',
        borderTopWidth: 5,
        borderLeftWidth: 8,
        borderLeftColor: '#bbb',
        borderBottomWidth: 5,
        borderBottomColor: 'transparent',
        zIndex: 1
    }
});

const CustomBubble = props => (
    <View style={styles.container}>
        {console.log(props)}
        <View style={props.position === 'right' ? { justifyContent: 'flex-end', alignItems: 'flex-end' } : null}>
            <Text style={styles.userName}>{props.currentMessage.user.name}</Text>
        </View>
        <View style={props.position === 'right' ? styles.bubbleTriangleRight : styles.bubbleTriangleLeft}>
            <View
                style={props.position === 'right' ? styles.bubbleTriangleWhiteRight : styles.bubbleTriangleWhiteLeft}
            />
        </View>
        <Bubble
            {...props}
            containerToPreviousStyle={{
                left: {
                    borderTopLeftRadius: 6
                },
                right: {
                    borderTopRightRadius: 6
                }
            }}
            containerToNextStyle={{
                left: {
                    borderBottomLeftRadius: 6
                },
                right: {
                    borderBottomRightRadius: 6
                }
            }}
            wrapperStyle={{
                left: {
                    borderRadius: 6,
                    height: 32,
                    alignItems: 'center',
                    borderColor: '#bbbbbb',
                    justifyContent: 'center',
                    borderWidth: 1,
                    borderLeftWidth: 1,
                    backgroundColor: 'white',
                    zIndex: 0
                },
                right: {
                    borderRadius: 6,
                    height: 32,
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
