import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Bubble, MessageText, MessageContainer, Message } from 'react-native-gifted-chat';
import CustomAvatar from './customAvartar';
import CustomBubble from './customBubble';

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

class CustomMessage extends Component {
    constructor(props) {
        super(props);
        this.renderMessageText = this.renderMessageText.bind(this);
        this.renderBubble = this.renderBubble.bind(this);
        this.renderAvatar = this.renderAvatar.bind(this);
    }

    renderAvatar(props) {
        return <CustomAvatar {...props} />;
    }

    renderBubble(props) {
        return <CustomBubble {...props} />;
    }

    renderMessageText(props) {
        return (
            <MessageText
                {...props}
                textStyle={{
                    right: {
                        color: 'black',
                        alignItems: 'center',
                        marginBottom: 0,
                        marginTop: 0,
                        lineHeight: null
                    }
                }}
            />
        );
    }

    render() {
        return (
            <Message
                renderAvatar={this.renderAvatar}
                renderBubble={this.renderBubble}
                renderMessageText={this.renderMessageText}
            />
        );
    }
}

export default CustomMessage;
