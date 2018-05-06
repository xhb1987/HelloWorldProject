import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    userLoginCancelAction,
    userLogin,
    userInputChangeAction
} from '../../state/screen/user/actions';
import * as selectors from '../../state/selectors';
import UserLogin from './user-login';
import { getUserLoginPassword } from '../../state/screen/user/selectors';

class Container extends Component {
    static get navigatorStyle() {
        return {
            navBarTranslucent: true,
            tabBarHidden: true,
            navBarNoBorder: true,
            navBarBackgroundColor: 'white',
            drawUnderTabBar: true,
            disabledBackGesture: true
        };
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
        ownProps.navigator.pop({
            animated: true,
            animationType: 'fade'
        });
        dispatch(userLoginCancelAction());
    },
    login: user => {
        ownProps.navigator.popToRoot({
            animated: true,
            animationType: 'fade'
        });
        dispatch(userLogin(user));
    },
    goToRegister: () => {
        ownProps.navigator.push({
            screen: 'screen.User.Register',
            animationType: 'fade',
            backButtonHidden: true,
            title: '注册'
        });
    },
    userInputChange: (value, type) => dispatch(userInputChangeAction(value, type))
});

const UserLoginContainer = connect(stateToProps, dispatchToProps)(Container);
export default UserLoginContainer;
