import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AppState } from 'react-native';
import { sendMessageAction } from 'state/screen/chat-message/actions';
import {
    receiveMessageAction,
    loadOldMessageRequestAction,
    loadOldMessageSuccessAction,
    toggleActionSheetAction
} from '../../../state/screen/square/actions';
import {
    socketInitAction,
    socketAuthAction,
    socketConnectionDetect
} from '../../../state/screen/chat-message/actions';
import Chat from './chat';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appState: AppState.currentState
        };
        this.handleAppStateChange = this.handleAppStateChange.bind(this);
        this.pollId = null;
        this.pollFunc = null;
    }

    componentDidMount() {
        AppState.addEventListener('change', this.handleAppStateChange);
    }

    componentDidUpdate(prevProps) {
        if (this.props.socketClosed === true && prevProps.socketClosed === false) {
            console.log('Im did update');
            this.props.socketInit();
        }

        if (
            this.props.isLogin === false &&
            this.props.sessionToken !== '' &&
            (prevProps.socketClosed === true && this.props.socketClosed === false)
        ) {
            console.log('im socket auth');
            this.props.socketAuth(this.props.sessionToken);
        }

        if (
            this.props.isLogoutLoading === false &&
            this.props.isLogin === true &&
            this.props.socketAuthed === false &&
            (prevProps.socketClosed === true && this.props.socketClosed === false)
        ) {
            console.log('test auth');
            this.props.socketAuth(this.props.sessionToken);
        }
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this.handleAppStateChange);
    }

    handleAppStateChange(nextState) {
        if (nextState === 'active' && this.state.appState === 'background') {
            // this.props.socketInit();
            if (
                this.props.socketClosed === false &&
                this.props.socketAuthed === false &&
                this.props.isLogin === true
            ) {
                this.props.socketAuth();
            }

            if (this.socketClosed === true) {
                this.props.socketInit();
            }
        }
        this.setState({ appState: nextState });
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
    socketConnect: state.chatMessage.socketConnect,
    socketAuthed: state.chatMessage.authorized,
    socketClosed: state.chatMessage.socketClosed,
    sessionToken: state.user.sessionToken,
    isLogoutLoading: state.user.logoutLoading
});

const dispatchToProps = (dispatch, ownProps) => ({
    sendMessage: (messages, village, userInfo) =>
        dispatch(sendMessageAction(messages, village, userInfo)),
    receiveMessage: messages => dispatch(receiveMessageAction(messages)),
    loadOldMessageRequest: () => dispatch(loadOldMessageRequestAction()),
    loadOldMessageSuccess: messages => dispatch(loadOldMessageSuccessAction(messages)),
    togglePicsActionSheet: () => dispatch(toggleActionSheetAction()),
    socketInit: () => dispatch(socketInitAction()),
    socketAuth: token => dispatch(socketAuthAction(token)),
    socketConnectionDetect: () => dispatch(socketConnectionDetect()),
    goToLoginPage: () =>
        ownProps.navigator.showModal({
            screen: 'screen.User.Login'
        })
});

const ChatContainer = connect(stateToProps, dispatchToProps)(Container);

export default ChatContainer;
