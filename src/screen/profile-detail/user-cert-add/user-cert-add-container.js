import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserCertAdd from './user-cert-add';

class Container extends Component {
    static get navigatorStyle() {
        return {
            navBarHidden: true,
            tabBarHidden: true,
            tabBarTranslucent: true
        };
    }

    render() {
        return <UserCertAdd {...this.props} />;
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

const UserCertAddContainer = connect(stateToProps, dispatchToProps)(Container);
export default UserCertAddContainer;
