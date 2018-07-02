import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserInvolve from './user-involve';

class Container extends Component {
    static get navigatorStyle() {
        return {
            navBarHidden: true,
            tabBarHidden: true,
            tabBarTranslucent: true
        };
    }

    render() {
        return <UserInvolve {...this.props} />;
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

const UserInvolveContainer = connect(stateToProps, dispatchToProps)(Container);
export default UserInvolveContainer;
