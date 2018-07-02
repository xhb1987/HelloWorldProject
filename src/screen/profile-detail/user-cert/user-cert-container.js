import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserCert from './user-cert';

class Container extends Component {
    static get navigatorStyle() {
        return {
            navBarHidden: true,
            tabBarHidden: true,
            tabBarTranslucent: true
        };
    }

    render() {
        return <UserCert {...this.props} />;
    }
}

const stateToProps = (state, ownProps) => ({
    isLogin: state.user.isLogin,
    navigator: ownProps.navigator
});
const dispatchToProps = (dispatch, ownProps) => ({
    goBack: () => {
        ownProps.navigator.pop();
    },
    goToAddCert: () => {
        ownProps.navigator.push({
            screen: 'screen.Profile.Cert.Add'
        });
    }
});

const UserCertContainer = connect(stateToProps, dispatchToProps)(Container);
export default UserCertContainer;
