import React from 'react';
import { connect } from 'react-redux';
import ScreenProfile from './screen-profile';

const Container = props => <ScreenProfile {...props} />;

const stateToProps = state => ({
    isLogin: state.user.isLogin
});
const dispatchToProps = (dispatch, ownProps) => ({
    userLogin: () => {
        ownProps.navigator.push({
            screen: 'screen.User.Login',
            animationType: 'fade',
            title: '登陆',
            backButtonHidden: true
        });
    }
});

const ScreenProfileContainer = connect(stateToProps, dispatchToProps)(Container);
export default ScreenProfileContainer;
