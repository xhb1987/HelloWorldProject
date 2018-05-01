import React from 'react';
import { connect } from 'react-redux';
import UserInfo from './user-info';

const Container = props => <UserInfo {...props} />;

const stateToProps = state => ({
    isLogin: state.user.isLogin,
    user: state.user.userInfo
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

const UserInfoContainer = connect(stateToProps, dispatchToProps)(Container);
export default UserInfoContainer;
