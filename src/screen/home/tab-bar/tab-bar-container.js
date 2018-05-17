import React from 'react';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import HomeTabBar from './tab-bar';

const Container = props => <HomeTabBar {...props} />;

const stateToProps = state => ({
    homeTitle: state.home.homeTitle
});

const dispatchToProps = () => ({
    showModal: () =>
        Navigation.showModal({
            screen: 'modal.Village',
            animationType: 'slide-up'
        })
});

const HomeTabBarContainer = connect(stateToProps, dispatchToProps)(Container);
export default HomeTabBarContainer;
