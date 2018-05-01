import React from 'react';
import { connect } from 'react-redux';
import Message from './message';

const Container = props => <Message {...props} />;

const stateToProps = (state, ownProps) => ({
    messagesList: state.message.messagesList,
    navigator: ownProps.navigator
});

const dispatchToProps = () => ({});

const MessageContainer = connect(stateToProps, dispatchToProps)(Container);

export default MessageContainer;
