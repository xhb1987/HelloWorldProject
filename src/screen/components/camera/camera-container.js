import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import Camera from './camera';
import { squareTakeImageAction } from '../../../state/screen/square/actions';

class Container extends Component {
    static get navigatorStyle() {
        return {
            navBarHidden: true,
            tabBarHidden: true,
            tabBarTranslucent: true
        };
    }

    render() {
        return <Camera {...this.props} />;
    }
}

const stateToProps = state => ({
    image: state.square.imageData
});

const dispatchToProps = dispatch => ({
    storeImage: imageData => dispatch(squareTakeImageAction(imageData)),
    cancel: () => Navigation.dismissModal({ animationType: 'slide-down' })
});

const CameraContainer = connect(stateToProps, dispatchToProps)(Container);

export default CameraContainer;
