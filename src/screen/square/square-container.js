import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleFabButtonAction } from '../../state/screen/square/actions';
import Square from './square';

const Container = props => <Square {...props} />;

Container.propTypes = {
    homeTitle: PropTypes.string,
    navigator: PropTypes.objectOf(PropTypes.any)
};

Container.defaultProps = {
    homeTitle: 'Default Home',
    navigator: {}
};

const stateToProps = (state, ownProps) => ({
    homeTitle: state.home.homeTitle,
    navigator: ownProps.navigator,
    toggleTextInput: state.square.toggleTextInput,
    socketAuthed: state.chatMessage.authorized,
    isLogin: state.user.isLogin
});

const dispatchToProps = (dispatch, ownProps) => ({
    toggleFabButton: (toggleValue, isLogin) => {
        if (isLogin === false) {
            ownProps.navigator.showModal({
                screen: 'screen.User.Login',
                animated: true,
                animationType: 'slide-up'
            });
        } else {
            dispatch(toggleFabButtonAction(toggleValue));
        }
    }
});

const SquareContainer = connect(stateToProps, dispatchToProps)(Container);

export default SquareContainer;
