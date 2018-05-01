import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    userLoginCancelAction,
    userLogin,
    userInputChangeAction
} from '../../state/screen/user/actions';
import UserLogin from './user-login';

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

const stateToProps = () => ({});
const dispatchToProps = (dispatch, ownProps) => ({
    cancelLogin: () => {
        ownProps.navigator.pop({
            animated: true,
            animationType: 'fade'
        });
        dispatch(userLoginCancelAction());
    },
    login: () => {
        ownProps.navigator.popToRoot({
            animated: true,
            animationType: 'fade'
        });
        dispatch(userLogin());
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
