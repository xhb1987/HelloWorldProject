import React, { Component } from 'react';
import { connect } from 'react-redux';
import CameraScreen from './camera-screen';
import {
    productTakeImageAction,
    productPublishImageDeleteAction
} from '../../../state/screen/product/actions';

class Container extends Component {
    static get navigatorStyle() {
        return {
            navBarHidden: true,
            tabBarHidden: true,
            tabBarTranslucent: true
        };
    }

    render() {
        return <CameraScreen {...this.props} />;
    }
}

const stateToProps = state => ({
    product: state.product.productToPublish
});

const dispatchToProps = dispatch => ({
    storeImage: imageData => dispatch(productTakeImageAction(imageData)),
    imageDelete: image => dispatch(productPublishImageDeleteAction(image))
});

const CameraScreenContainer = connect(stateToProps, dispatchToProps)(Container);

export default CameraScreenContainer;
