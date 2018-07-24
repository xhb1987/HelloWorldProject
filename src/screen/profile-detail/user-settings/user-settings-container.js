import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserSettings from './user-settings';

class Container extends Component {
    static get navigatorStyle() {
        return {
            navBarHidden: true,
            tabBarHidden: true,
            tabBarTranslucent: true
        };
    }

    render() {
        return <UserSettings {...this.props} />;
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
    goToResetPassword: () => {
        ownProps.navigator.push({
            screen: 'screen.Profile.Settings.ResetPassword'
        });
    }
});

const UserSettingsContainer = connect(stateToProps, dispatchToProps)(Container);
export default UserSettingsContainer;
