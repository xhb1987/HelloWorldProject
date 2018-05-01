import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    userRegisterCode,
    userRegister,
    userInputChangeAction
} from '../../state/screen/user/actions';
import UserRegister from './user-register';

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
        return <UserRegister {...this.props} />;
    }
}

const stateToProps = () => ({});
const dispatchToProps = (dispatch, ownProps) => ({
    userRegister: () => {
        ownProps.navigator.popToRoot({
            animated: true,
            animationType: 'fade'
        });
        dispatch(userRegister());
    },
    getRegisterCode: () => {
        dispatch(userRegisterCode());
    },
    userInputChange: (value, type) => dispatch(userInputChangeAction(value, type))
});

const UserRegisterContainer = connect(stateToProps, dispatchToProps)(Container);
export default UserRegisterContainer;
