import React, { Component } from 'react';
import { connect } from 'react-redux';
import CameraRoll from './camera-roll';
import { productImageSelectAction } from '../../../state/screen/product/actions';

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
