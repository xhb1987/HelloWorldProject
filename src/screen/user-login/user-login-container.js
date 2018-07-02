import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    userLoginCancelAction,
    userLogin,
    userInputChangeAction,
    userInfoClearAction
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
    componentWillUnmount() {
        this.props.cancelLogin();
    }
    render() {
        return <UserLogin {...this.props} />;
    }
}

const stateToProps = state => ({
    user: selectors.getUserLogInfo(state)
});
const dispatchToProps = (dispatch, ownProps) => ({
    cancelLogin: () => {
        ownProps.navigator.pop({});
        dispatch(userInfoClearAction());
    },
    login: user => {
        ownProps.navigator.popToRoot({
            animated: true
        });
        dispatch(userLogin(user));
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
