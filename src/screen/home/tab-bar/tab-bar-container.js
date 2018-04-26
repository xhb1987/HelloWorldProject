import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import HomeTabBar from './tab-bar';

class Container extends Component {
    constructor(props) {
        super(props);
        this.openOption = this.openOption.bind(this);
    }

    openOption() {
        Navigation.showLightBox({
            screen: 'screen.Component.LightBox',
            passProps: {
                title: this.props.homeTitle,
                content: [1, 2, 3, 4, 5],
                onClose: Navigation.dismissLightBox
            },
            style: {
                backgroundBlur: 'dark',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                tapBackgroundToDismiss: true
            }
        });
    }
    render() {
        return <HomeTabBar {...this.props} openOption={this.openOption} />;
    }
}
const stateToProps = state => ({
    homeTitle: state.home.homeTitle
});

const HomeTabBarContainer = connect(stateToProps)(Container);
export default HomeTabBarContainer;
