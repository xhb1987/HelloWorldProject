import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    productImageSelectAction,
    productPublishImageClearAction
} from '../../../state/screen/product/actions';
import PhotoScreen from './photo-screen';

class Container extends Component {
    static get navigatorStyle() {
        return {
            navBarHidden: true,
            tabBarHidden: true,
            tabBarTranslucent: true
        };
    }

    render() {
        return <PhotoScreen {...this.props} />;
    }
}

const stateToProps = state => ({
    product: state.product.productToPublish
});

const dispatchToProps = (dispatch, ownProps) => ({
    goToTakePicature: () => {
        ownProps.navigator.push({
            screen: 'screen.ProductPublish.CameraScreen'
        });
    },
    cancel: () => {
        ownProps.navigator.pop();
        dispatch(productPublishImageClearAction());
    },
    goBack: () => {
        ownProps.navigator.pop();
    },
    selectImage: (images, currentImage) => dispatch(productImageSelectAction(images, currentImage))
});

const PhotoScreenContainer = connect(stateToProps, dispatchToProps)(Container);

export default PhotoScreenContainer;
