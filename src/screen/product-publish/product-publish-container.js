import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import ProductPublish from './product-publish';
import {
    productInputChangeAction,
    productOptionAction,
    productPublishClearAction,
    productPublishImageDeleteAction
} from '../../state/screen/product/actions';

class Container extends Component {
    static get navigatorStyle() {
        return {
            navBarHidden: true,
            tabBarHidden: true,
            tabBarTranslucent: true
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
    imageDelete: image => dispatch(productPublishImageDeleteAction(image)),
    productInputChange: (value, type) => dispatch(productInputChangeAction(value, type)),
    goToPhotoScreen: () => {
        ownProps.navigator.push({
            screen: 'screen.ProductPublish.PhotoScreen'
        });
    },
    cancel: () => {
        Navigation.dismissModal({ animationType: 'slide-down' });
        dispatch(productPublishClearAction());
    },
    showSelections: type => {
        dispatch(productOptionAction(type));
        Navigation.showLightBox({
            screen: 'lightBox.ProductPublish.Selections',
            navigatorStyle: {
                screenBackgroundColor: '#3a3a3a7a'
            },
            animationType: 'none'
        });
    },
    openCategory: () => {
        ownProps.navigator.push({
            screen: 'modal.Category'
        });
    }
});

const ProductPublishContainer = connect(stateToProps, dispatchToProps)(Container);

export default ProductPublishContainer;
