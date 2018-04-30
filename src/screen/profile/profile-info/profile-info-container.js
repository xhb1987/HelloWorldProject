import React from 'react';
import { connect } from 'react-redux';
import ProfileInfo from './profile-info';

const Container = props => <ProfileInfo {...props} />;

const stateToProps = state => ({
    user: state.user.userInfo,
    list: state.user.myItem
});
const dispatchToProps = () => ({});

const ProfileInfoContainer = connect(stateToProps, dispatchToProps)(Container);
export default ProfileInfoContainer;
