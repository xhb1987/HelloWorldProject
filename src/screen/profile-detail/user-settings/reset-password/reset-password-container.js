import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    userInputChangeAction,
    passwordSecuredToggleAction
} from '../../../../state/screen/user/actions';
import * as selectors from '../../../../state/selectors';
import ResetPassword from './reset-password';

class Container extends Component {
    static get navigatorStyle() {
        return {
            navBarHidden: true,
            tabBarHidden: true,
            tabBarTranslucent: true
        };
    }

    render() {
        return <ResetPassword {...this.props} />;
    }
}

const stateToProps = state => ({
    user: selectors.getUserLogInfo(state),
    notification: state.user.notification,
    isLoading: state.user.loading,
    passwordSecured: state.user.passwordSecured
});

const dispatchToProps = (dispatch, ownProps) => ({
    passwordSecuredToggle: passwordSecured => {
        dispatch(passwordSecuredToggleAction(passwordSecured));
    },
    goBack: () => {
        ownProps.navigator.pop();
    },
    userInputChange: (value, type) => dispatch(userInputChangeAction(value, type))
});

const ResetPasswordContainer = connect(stateToProps, dispatchToProps)(Container);
export default ResetPasswordContainer;
