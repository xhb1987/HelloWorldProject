import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import PhotoRoll from './photo-roll';
import { squarePickImageAction } from '../../../state/screen/square/actions';

class Container extends Component {
    static get navigatorStyle() {
        return {
            navBarHidden: true,
            tabBarHidden: true,
            tabBarTranslucent: true
        };
    }

    render() {
        return <PhotoRoll {...this.props} />;
    }
}

const stateToProps = state => ({
    product: state.square.imageData
});

const dispatchToProps = dispatch => ({
    selectImage: (images, currentImage) => dispatch(squarePickImageAction(images, currentImage)),
    cancel: () => Navigation.dismissModal({ animationType: 'slide-down' })
});

const PhotoRollContainer = connect(stateToProps, dispatchToProps)(Container);

export default PhotoRollContainer;
