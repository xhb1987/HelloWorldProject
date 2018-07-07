import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    userLoginCancelAction,
    userLogin,
    userInputChangeAction,
    userInfoClearAction,
    resetNotificationAction
} from '../../state/screen/user/actions';
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
        console.log(prevProps);
        if (this.props.isLogin) {
            this.props.loginSuccess();
        }

        // notification for both login and reigster, need to refactor to better way
        if (!this.props.isLogin && this.props.notification !== '') {
            this.props.loginFailure(this.props.notification);
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
    smsCode: state.user.smsCode
});

const dispatchToProps = (dispatch, ownProps) => ({
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
    },
    loginFailure: note => {
        console.log('Im note', note);
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
