import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import ProductPublish from './product-publish';
import {
    productInputChangeAction,
    productOptionAction,
    productPublishClearAction,
    productPublishImageDeleteAction,
    productPriceInputAction,
    productPublishAction
} from '../../state/screen/product/actions';
import * as selectors from '../../state/selectors';

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
    product: state.product.productToPublish,
    productValidation: selectors.getProductToPublishInfo(state)
});

const dispatchToProps = (dispatch, ownProps) => ({
    productPublish: () => dispatch(productPublishAction()),
    productPriceInput: price => dispatch(productPriceInputAction(price)),
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
