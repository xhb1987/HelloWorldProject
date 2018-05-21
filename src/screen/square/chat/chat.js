import React, { Component } from 'react';
import { Text, View } from 'react-native';
import moment from 'moment';
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
        console.log(moment.locales());
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

    onSend(messages = []) {
        this.props.sendMessage(messages);
        this.answerDemo(messages);
    }

    answerDemo(messages) {
        if (messages.length > 0) {
            if (messages[0].image || messages[0].location || !this._isAlright) {
                this.setState(previousState => {
                    return {
                        typingText: '用户正在输入'
                    };
                });
            }
        }

        setTimeout(() => {
            if (this._isMounted === true) {
                if (messages.length > 0) {
                    if (messages[0].image) {
                        this.onReceive('Nice picture!');
                    } else if (messages[0].location) {
                        this.onReceive('My favorite place');
                    } else {
                        if (!this._isAlright) {
                            this._isAlright = true;
                            this.onReceive('好的');
                        }
                    }
                }
            }

            this.setState(previousState => {
                return {
                    typingText: null
                };
            });
        }, 1000);
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
        return this.props.toggleTextInput ? <CustomInputToolBar {...props} /> : null;
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
                    _id: 1 // sent messages should have same user._id
                }}
                renderAvatarOnTop={true}
                renderBubble={this.renderBubble}
                renderSystemMessage={this.renderSystemMessage}
                renderFooter={this.renderFooter}
                renderMessageText={this.renderMessageText}
                renderTime={this.renderTime}
                renderTicks={this.renderTicks}
                renderInputToolbar={this.renderInputToolbar}
                showUserAvatar={true}
                renderAvatarOnTop={true}
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
