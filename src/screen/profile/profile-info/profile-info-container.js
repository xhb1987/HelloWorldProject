import React from 'react';
import { connect } from 'react-redux';
import ProfileInfo from './profile-info';
import { involvePublishAction } from '../../../state/screen/user/actions';

const Container = props => <ProfileInfo {...props} />;

const stateToProps = state => ({
    user: state.user.userInfo,
    isLogin: state.user.isLogin
});
const dispatchToProps = (dispatch, ownProps) => ({
    goToCertPage: () =>
        ownProps.navigator.push({
            screen: 'screen.Profile.Cert'
        }),
    goToPublishPage: () => {
        ownProps.navigator.push({
            screen: 'screen.Profile.Publish'
        });
        dispatch(involvePublishAction('publish'));
    },
    goToInvolvePage: () => {
        ownProps.navigator.push({
            screen: 'screen.Profile.Involve'
        });
        dispatch(involvePublishAction('involve'));
    },
    goToLoginPage: () => {
        ownProps.navigator.showModal({
            screen: 'screen.User.Login'
        });
    }
});

const ProfileInfoContainer = connect(stateToProps, dispatchToProps)(Container);
export default ProfileInfoContainer;
