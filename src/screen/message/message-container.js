import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './message';

class Container extends Component {
    static get navigatorStyle() {
        return {
            navBarHidden: true,
            tabBarHidden: true,
            tabBarTranslucent: true
        };
    }

    render() {
        return <Message {...this.props} />;
    }
}

const stateToProps = (state, ownProps) => ({
    messagesList: state.message.messagesList,
    navigator: ownProps.navigator
});

const dispatchToProps = () => ({});

const MessageContainer = connect(stateToProps, dispatchToProps)(Container);

export default MessageContainer;
