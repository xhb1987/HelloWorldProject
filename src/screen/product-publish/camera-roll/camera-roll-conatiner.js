import React, { Component } from 'react';
import { connect } from 'react-redux';
import CameraRoll from './camera-roll';
import { productImageSelectAction } from '../../../state/screen/product/actions';

class Container extends Component {
    static get navigatorStyle() {
        return {
            navBarHidden: true,
            tabBarHidden: true,
            tabBarTranslucent: true
        };
    }

    render() {
        return <CameraRoll {...this.props} />;
    }
}

const stateToProps = state => ({
    product: state.product.productToPublish
});

const dispatchToProps = dispatch => ({
    selectImage: (images, currentImage) => dispatch(productImageSelectAction(images, currentImage))
});

const CameraRollContainer = connect(stateToProps, dispatchToProps)(Container);

export default CameraRollContainer;
