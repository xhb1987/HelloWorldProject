import React, { Component } from 'react';
import { connect } from 'react-redux';
import CameraScreen from './camera-screen';
import { productTakeImageAction } from '../../../state/screen/product/actions';

class Container extends Component {
    static get navigatorStyle() {
        return {
            navBarTranslucent: true,
            tabBarHidden: true,
            navBarNoBorder: true,
            navBarBackgroundColor: 'white'
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
    storeImage: imageData => dispatch(productTakeImageAction(imageData))
});

const CameraScreenContainer = connect(stateToProps, dispatchToProps)(Container);

export default CameraScreenContainer;
