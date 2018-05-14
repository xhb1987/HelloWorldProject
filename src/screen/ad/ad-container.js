import React, { Component } from 'react';
import { connect } from 'react-redux';
import Ad from './ad';

class Container extends Component {
    static get navigatorStyle() {
        return {
            tabBarHidden: true,
            tabBarTranslucent: true
        };
    }

    componentWillMount() {
        this.props.switchTab();
    }

    render() {
        return <Ad {...this.props} />;
    }
}

const stateToProps = (state, ownProps) => ({
    isLogin: state.user.isLogin,
    navigator: ownProps.navigator
});
const dispatchToProps = (dispatch, ownProps) => ({
    switchTab: () =>
        ownProps.navigator.switchToTab({
            tabIndex: 0
        })
});

const AdContainer = connect(stateToProps, dispatchToProps)(Container);
export default AdContainer;
