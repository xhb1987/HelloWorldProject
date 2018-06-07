import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    sendMessageAction,
    receiveMessageAction,
    loadOldMessageRequestAction,
    loadOldMessageSuccessAction,
    toggleActionSheetAction,
    squareSocketInit,
    squareSocketAuth
} from '../../../state/screen/square/actions';
import Chat from './chat';

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
    sendingMessage: state.square.sendingMessage,
    messages: state.square.messages,
    old_messages: state.square.old_messages,
    loadEarlier: state.square.loadEarlier,
    typingText: state.square.typingText,
    isLoadingEarlier: state.square.isLoadingEarlier,
    toggleTextInput: state.square.toggleTextInput,
    toggleActionSheet: state.square.toggleActionSheet
});

const dispatchToProps = dispatch => ({
    sendMessage: messages => dispatch(sendMessageAction(messages)),
    receiveMessage: messages => dispatch(receiveMessageAction(messages)),
    loadOldMessageRequest: () => dispatch(loadOldMessageRequestAction()),
    loadOldMessageSuccess: messages => dispatch(loadOldMessageSuccessAction(messages)),
    togglePicsActionSheet: () => dispatch(toggleActionSheetAction()),
    squareSocketInit: () => dispatch(squareSocketInit()),
    squareSocketAuth: () => dispatch(squareSocketAuth())
});

const ChatContainer = connect(stateToProps, dispatchToProps)(Container);

export default ChatContainer;
