import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    userLoginCancelAction,
    userLogin,
    userInputChangeAction,
    userInfoClearAction,
    resetNotificationAction,
    passwordSecuredToggleAction
} from '../../state/screen/user/actions';
import { socketAuthAction } from '../../state/screen/chat-message/actions';
import * as selectors from '../../state/selectors';
import UserLogin from './user-login';
import { getUserLoginPassword } from '../../state/screen/user/selectors';

class Container extends Component {
    static get navigatorStyle() {
        return {
            navBarHidden: true,
            tabBarHidden: true,
            tabBarTranslucent: true
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.isLogin) {
            this.props.loginSuccess();
        }
    }

    componentWillUnmount() {
        this.props.cancelLogin();
    }

    render() {
        return <UserLogin {...this.props} />;
    }
}

const stateToProps = state => ({
    user: selectors.getUserLogInfo(state),
    isLogin: state.user.isLogin,
    notification: state.user.notification,
    smsCode: state.user.smsCode,
    isLoading: state.user.loading,
    passwordSecured: state.user.passwordSecured
});

const dispatchToProps = (dispatch, ownProps) => ({
    passwordSecuredToggle: passwordSecured => {
        dispatch(passwordSecuredToggleAction(passwordSecured));
    },
    cancelLogin: () => {
        ownProps.navigator.dismissModal({});
        dispatch(userInfoClearAction());
    },
    login: user => {
        dispatch(userLogin(user));
    },
    loginSuccess: () => {
        ownProps.navigator.dismissModal({
            animated: true
        });
        dispatch(socketAuthAction());
    },
    loginFailure: note => {
        ownProps.navigator.showInAppNotification({
            screen: 'component.Notification',
            autoDismissTimerSec: 0.5
        });
    },
    goToRegister: () => {
        ownProps.navigator.push({
            screen: 'screen.User.Register',
            animated: true,
            animationType: 'slide-horizontal'
        });
    },
    userInputChange: (value, type) => dispatch(userInputChangeAction(value, type))
});

const UserLoginContainer = connect(stateToProps, dispatchToProps)(Container);
export default UserLoginContainer;
