import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogout } from '../../state/screen/user/actions';
import ScreenProfile from './screen-profile';

class Container extends Component {
    static get navigatorStyle() {
        return {
            navBarHidden: true
        };
    }

    render() {
        return <ScreenProfile {...this.props} />;
    }
}

const stateToProps = (state, ownProps) => ({
    isLogin: state.user.isLogin,
    navigator: ownProps.navigator
});
const dispatchToProps = (dispatch, ownProps) => ({
    userLogin: () => {
        ownProps.navigator.push({
            screen: 'screen.User.Login',
            animationType: 'fade',
            title: '登陆',
            backButtonHidden: true
        });
    },

    userLogout: () => dispatch(userLogout())
});

const ScreenProfileContainer = connect(stateToProps, dispatchToProps)(Container);
export default ScreenProfileContainer;
