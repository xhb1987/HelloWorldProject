import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    sendMessageAction,
    receiveMessageAction,
    loadOldMessageRequestAction,
    loadOldMessageSuccessAction
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
