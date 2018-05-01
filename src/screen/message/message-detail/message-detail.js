import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { GiftedChat, Bubble, SystemMessage } from 'react-native-gifted-chat';
import styles from './styles';

class MessageDetail extends Component {
    static renderBubble(props) {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    left: {
                        backgroundColor: '#f0f0f0'
                    }
                }}
            />
        );
    }

    static renderSystemMessage(props) {
        return (
            <SystemMessage
                {...props}
                containerStyle={{
                    marginBottom: 15
                }}
                textStyle={{
                    fontSize: 14
                }}
            />
        );
    }

    constructor(props) {
        super(props);
        this.state = {
            typingText: null
        };

        this._isMounted = false;
        this.onSend = this.onSend.bind(this);
        this.renderFooter = this.renderFooter.bind(this);
    }

    componentWillMount() {
        this._isMounted = true;
        this.setState(() => {
            return {
                messages: this.props.messages
            };
        });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    onSend(messages = []) {
        console.log(this.props.messages);
    }

    renderFooter() {
        if (this.state.typingText) {
            return (
                <View style={styles.footerContainer}>
                    <Text style={styles.footerText}>{this.state.typingText}</Text>
                </View>
            );
        }
        return null;
    }

    render() {
        return (
            <GiftedChat
                messages={this.props.messages}
                onSend={this.onSend}
                user={{
                    _id: 1 // sent messages should have same user._id
                }}
                renderBubble={this.renderBubble}
                renderSystemMessage={this.renderSystemMessage}
                renderFooter={this.renderFooter}
            />
        );
    }
}

export default MessageDetail;
