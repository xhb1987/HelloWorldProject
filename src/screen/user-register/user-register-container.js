import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as selectors from '../../state/selectors';
import {
    userRegisterCode,
    userRegister,
    userInputChangeAction,
    validateRegisterFormAction,
    userInfoClearAction
} from '../../state/screen/user/actions';
import UserRegister from './user-register';

class Container extends Component {
    static get navigatorStyle() {
        return {
            navBarHidden: true,
            tabBarHidden: true,
            tabBarTranslucent: true
        };
    }
    componentWillUnmount() {
        this.props.userInputClear();
    }

    componentDidUpdate(prevProps) {
        if (this.props.isLogin) {
            this.props.registerSuccess();
        }
    }

    render() {
        return <UserRegister {...this.props} />;
    }
}

const stateToProps = state => ({
    phone: state.user.phone,
    password: state.user.password,
    smsCode: state.user.smsCode,
    user: selectors.getUserLogInfo(state),
    isLogin: state.user.isLogin,
    notification: state.user.notification,
    isLoading: state.user.loading
});

const dispatchToProps = (dispatch, ownProps) => ({
    registerSuccess: () => {
        ownProps.navigator.popToRoot({
            animated: true,
            animationType: 'fade'
        });
    },
    cancel: () => {
        ownProps.navigator.pop();
    },
    userRegister: user => {
        dispatch(userRegister(user));
    },
    getRegisterCode: phone => {
        dispatch(userRegisterCode(phone));
    },
    userInputChange: (value, type) => dispatch(userInputChangeAction(value, type)),
    userInputValidate: (user, type) => dispatch(validateRegisterFormAction(user, type)),
    userInputClear: () => dispatch(userInfoClearAction())
});

const UserRegisterContainer = connect(stateToProps, dispatchToProps)(Container);
export default UserRegisterContainer;
