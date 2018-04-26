import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GiftedChat, SystemMessage } from 'react-native-gifted-chat';
import { Text, View } from 'react-native';
import {
    sendMessageAction,
    receiveMessageAction,
    loadOldMessageRequestAction,
    loadOldMessageSuccessAction
} from '../../../state/screen/square/actions';
import CustomActions from './customActions';
import CustomView from './customView';
import Chat from './chat';
import styles from './styles';

const Container = props => <Chat {...props} />;

Container.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object),
    old_messages: PropTypes.arrayOf(PropTypes.object)
};

Container.defaultProps = {
    messages: [{}],
    old_messages: [{}]
};

const stateToProps = state => ({
    messages: state.square.messages,
    old_messages: state.square.old_messages,
    loadEarlier: state.square.loadEarlier,
    typingText: state.square.typingText,
    isLoadingEarlier: state.square.isLoadingEarlier
});

const dispatchToProps = dispatch => ({
    sendMessage: messages => dispatch(sendMessageAction(messages)),
    receiveMessage: messages => dispatch(receiveMessageAction(messages)),
    loadOldMessageRequest: () => dispatch(loadOldMessageRequestAction()),
    loadOldMessageSuccess: messages => dispatch(loadOldMessageSuccessAction(messages))
});

const ChatContainer = connect(stateToProps, dispatchToProps)(Container);

export default ChatContainer;
