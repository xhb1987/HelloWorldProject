import React, { Component } from 'react';
import { connect } from 'react-redux';
import PublishHome from './publish-home';

class Container extends Component {
    static get navigatorStyle() {
        return {
            navBarHidden: true,
            tabBarHidden: true,
            tabBarTranslucent: true
        };
    }
    render() {
        return <PublishHome {...this.props} />;
    }
}

const stateToProps = () => ({});

const dispatchToProps = (dispatch, ownProps) => ({
    goToProductPublish: () => {
        ownProps.navigator.showModal({
            screen: 'screen.ProductPublish'
        });
    },
    close: () =>
        ownProps.navigator.dismissModal({
            animationType: 'slide-down'
        })
});

const PublishHomeContainer = connect(stateToProps, dispatchToProps)(Container);
export default PublishHomeContainer;
