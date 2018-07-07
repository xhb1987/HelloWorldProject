import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sendMessageAction } from 'state/screen/chat-message/actions';
import {
    receiveMessageAction,
    loadOldMessageRequestAction,
    loadOldMessageSuccessAction,
    toggleActionSheetAction
} from '../../../state/screen/square/actions';
import { socketInitAction, socketAuthAction } from '../../../state/screen/chat-message/actions';
import Chat from './chat';

class Container extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.socketConnect === false && prevProps.socketConnect === true) {
            this.props.socketInit();
            this.props.socketAuth();
        }
    }

    render() {
        return <Chat {...this.props} goToLoginPage={this.props.goToLoginPage} />;
    }
}

Container.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object),
    old_messages: PropTypes.arrayOf(PropTypes.object)
};

Container.defaultProps = {
    messages: [{}],
    old_messages: [{}]
};

const stateToProps = state => ({
    isLogin: state.user.isLogin,
    user: state.user.userInfo,
    village: state.home.selectedVillage,
    messages: state.chatMessage.squareMessages,
    old_messages: state.square.old_messages,
    loadEarlier: state.square.loadEarlier,
    typingText: state.square.typingText,
    isLoadingEarlier: state.square.isLoadingEarlier,
    toggleTextInput: state.square.toggleTextInput,
    toggleActionSheet: state.square.toggleActionSheet,
    socketConnect: state.chatMessage.socketConnect
});

const dispatchToProps = (dispatch, ownProps) => ({
    sendMessage: (messages, village, userInfo) =>
        dispatch(sendMessageAction(messages, village, userInfo)),
    receiveMessage: messages => dispatch(receiveMessageAction(messages)),
    loadOldMessageRequest: () => dispatch(loadOldMessageRequestAction()),
    loadOldMessageSuccess: messages => dispatch(loadOldMessageSuccessAction(messages)),
    togglePicsActionSheet: () => dispatch(toggleActionSheetAction()),
    socketInit: () => dispatch(socketInitAction()),
    socketAuth: () => dispatch(socketAuthAction()),
    goToLoginPage: () =>
        ownProps.navigator.showModal({
            screen: 'screen.User.Login'
        })
});

const ChatContainer = connect(stateToProps, dispatchToProps)(Container);

export default ChatContainer;
