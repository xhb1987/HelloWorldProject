import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './message';

class Container extends Component {
    static get navigatorStyle() {
        return {
            navBarCustomView: 'screen.MessageHomeContainer.TopBar',
            navBarComponentAlignment: 'center',
            navBarCustomViewInitialProps: {
                title: 'test'
            }
        };
    }

    render() {
        return <Message {...this.props} />;
    }
}

const MessageContainer = connect()(Container);

export default MessageContainer;
