import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserPublish from './user-publish';

class Container extends Component {
    static get navigatorStyle() {
        return {
            navBarHidden: true,
            tabBarHidden: true,
            tabBarTranslucent: true
        };
    }

    render() {
        return <UserPublish {...this.props} />;
    }
}

const stateToProps = (state, ownProps) => ({
    isLogin: state.user.isLogin,
    navigator: ownProps.navigator
});
const dispatchToProps = (dispatch, ownProps) => ({
    goBack: () => {
        ownProps.navigator.pop();
    }
});

const UserPublishContainer = connect(stateToProps, dispatchToProps)(Container);
export default UserPublishContainer;
