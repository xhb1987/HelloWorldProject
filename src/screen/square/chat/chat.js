import React, { Component } from 'react';
import io from 'socket.io-client';
import { Text, View } from 'react-native';
import { GiftedChat, Bubble, SystemMessage, MessageText } from 'react-native-gifted-chat';
import CustomAvatar from './customAvartar';
import CustomBubble from './customBubble';
import CustomInputToolBar from './customInputToolBar';
import styles from './styles';

export default class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadEarlier: true,
            typingText: null,
            isLoadingEarlier: false
        };

        this._isMounted = false;
        this.onSend = this.onSend.bind(this);
        this.onReceive = this.onReceive.bind(this);
        // this.renderCustomActions = this.renderCustomActions.bind(this);
        this.renderBubble = this.renderBubble.bind(this);
        this.renderSystemMessage = this.renderSystemMessage.bind(this);
        this.renderFooter = this.renderFooter.bind(this);
        this.onLoadEarlier = this.onLoadEarlier.bind(this);
        this.renderMessageText = this.renderMessageText.bind(this);
        this.renderTime = this.renderTime.bind(this);
        this.renderTicks = this.renderTicks.bind(this);
        this.renderInputToolbar = this.renderInputToolbar.bind(this);
        this.renderAvatar = this.renderAvatar.bind(this);
        this._isAlright = null;
    }

    componentWillMount() {
        this._isMounted = true;
        this.setState(() => {
            return {
                messages: this.props.messages
            };
        });
    }

    componentDidMount() {
        this.props.squareSocketInit();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    onLoadEarlier() {
        this.props.loadOldMessageRequest();
        setTimeout(() => {
            if (this._isMounted === true) {
                this.props.loadOldMessageSuccess(this.props.old_messages);
            }
        }, 1000); // simulating network
    }

    onSend(messages) {
        console.log(messages);
        this.props.sendMessage(messages);
        // this.answerDemo(messages);
    }

    onReceive(text) {
        let receiveText = {
            _id: Math.round(Math.random() * 1000000),
            text: text,
            createdAt: new Date(),
            user: {
                _id: 2,
                name: 'React Native'
                // avatar: 'https://facebook.github.io/react/img/logo_og.png',
            }
        };
        this.props.receiveMessage(receiveText);
    }
    renderMessageText(props) {
        return (
            <MessageText
                {...props}
                textStyle={{
                    right: {
                        fontSize: 16,
                        color: '#333',
                        alignItems: 'center',
                        marginBottom: 0,
                        marginTop: 0,
                        lineHeight: null
                    },
                    left: {
                        fontSize: 16,
                        color: '#333'
                    }
                }}
            />
        );
    }

    renderTime(props) {
        return null;
    }

    renderTicks(props) {
        return null;
    }

    renderBubble(props) {
        return <CustomBubble {...props} />;
    }

    renderSystemMessage(props) {
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

    renderInputToolbar(props) {
        return this.props.toggleTextInput ? (
            <CustomInputToolBar {...props} onSend={this.onSend} />
        ) : null;
    }

    renderAvatar(props) {
        return <CustomAvatar {...props} />;
    }

    render() {
        return (
            <GiftedChat
                bottomOffset={-10}
                messages={this.props.messages}
                onSend={this.onSend}
                user={{
                    name: 'Developer',
                    _id: 1 // sent messages should have same user._id
                }}
                showAvatarForEveryMessage
                renderAvatarOnTop
                renderBubble={this.renderBubble}
                renderSystemMessage={this.renderSystemMessage}
                renderFooter={this.renderFooter}
                renderMessageText={this.renderMessageText}
                renderTime={this.renderTime}
                renderTicks={this.renderTicks}
                renderInputToolbar={this.renderInputToolbar}
                showUserAvatar
                listViewProps={
                    this.props.toggleTextInput
                        ? {
                              style: { marginBottom: 10, backgroundColor: '#f0f0f0' }
                          }
                        : {
                              style: { marginBottom: -45, backgroundColor: '#f0f0f0' }
                          }
                }
                locale="zh-cn"
                timeFormat="LT"
                dateFormat="dddd HH:mm"
                renderAvatar={this.renderAvatar}
            />
        );
    }
}
