import React from 'react';
import { connect } from 'react-redux';
import MessageDetail from './message-detail';

const Container = props => <MessageDetail {...props} />;

const stateToProps = state => ({
    messagesList: state.message.messagesList,
    messages: state.message.message
});

const dispatchToProps = () => ({});

const MessageDetailContainer = connect(stateToProps, dispatchToProps)(Container);

export default MessageDetailContainer;
