import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductPublish from './product-publish';
import { productInputChangeAction } from '../../state/screen/product/actions';

class Container extends Component {
    static get navigatorStyle() {
        return {
            navBarTranslucent: true,
            tabBarHidden: false,
            drawUnderTabBar: true,
            navBarButtonColor: '#123456',
            navBarTextColor: '#000000',
            navBarBackgroundColor: '#ffffff'
        };
    }

    render() {
        return <ProductPublish {...this.props} />;
    }
}

const stateToProps = state => ({
    product: state.product.productToPublish
});

const dispatchToProps = (dispatch, ownProps) => ({
    productInputChange: (value, type) => dispatch(productInputChangeAction(value, type)),
    goToTakePicature: () => {
        ownProps.navigator.push({
            screen: 'screen.ProductPublish.CameraScreen'
        });
    }
});

const ProductPublishContainer = connect(stateToProps, dispatchToProps)(Container);

export default ProductPublishContainer;
